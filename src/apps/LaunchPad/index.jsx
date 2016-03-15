import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from '../../components/bcl-pages/Dashboard';
import * as Speak from '../../components/bcl-speak/bcl-speak';

var LaunchPad = React.createClass({

    componentDidMount: function() {
        this.serverRequest = $.get("http://pathfinder/cd/core/items/sitecore/client/Applications/Launchpad/PageSettings/Buttons", { token: "1", levels: "2", fields: "Text, Icon, Link" }, function(result) {
            this.setState(result);
        }.bind(this));
    },

    render: function() {
        var grids = this.getButtons(this.state);

        var output = this.renderGrids(grids);

        return (
            <Dashboard id="LaunchPad" applicationHeader="Sitecore Experience Management">
                { output }
            </Dashboard>
        );
    },

    renderGrids: function(grids) {
        if (grids == null) {
            return;
        }

        var output = [];

        for (var index = 0; index < grids.length; index++) {
            var grid = grids[index];
            var className = "sc-launchpad-group" + (index == 0 ? " first" : index == grids.length - 1 ? " last" : "");

            output.push(<div className={className}>{ this.renderGrid(grid) }</div>);
        }

        return output;
    },

    renderGrid: function(grid) {
        var output = [];

        for (var rowIndex = 0; rowIndex < grid.length; rowIndex++) {
            output.push(<div className="sc-launchpad-group-row">{ this.renderRow(grid[rowIndex]) }</div>);
        }

        return output;
    },

    renderRow: function(row) {
        var output = [];

        for (var index = 0; index < row.length; index++) {
            output.push(this.renderItem(row[index]));
        }

        return output;
    },

    renderItem: function(item) {
        var icon = item.largeIcon;
        var text = item.fields[0].value;
        var href = item.fields[2].value;

        return (
            <a href={href} className="sc-launchpad-item" title={text}>
                <span className="icon">
                    <img src={icon} width="48" height="48" alt={text} />
                </span>
                <span className="sc-launchpad-text">
                    { text }
                </span>
            </a>);
    },

    getButtons: function(state) {
        if (state == null) {
            return null;
        }

        var grids = []

        for (var groupIndex = 0; groupIndex < state.children.length; groupIndex++) {
            var grid = [];

            var group = state.children[groupIndex];
            var groupCount = group.children.length;

            var width = groupCount % 3 == 0 ? Math.round(groupCount / 3) : Math.round(groupCount / 3) + 1;

            for (var y = 0; y <= groupCount / width; y++) {
                var row = [];

                for (var x = 0; x < width; x++) {
                    var index = x + y * width;
                    if (index >= groupCount) {
                        break;
                    }

                    var item = group.children[index];
                    row.push(item);
                }

                if (row.length > 0) {
                    grid.push(row);
                }
            }

            if (grid.length == 0) {
                grid.push([]);
            }

            grids.push(grid);
        }

        return grids;
    }
});

function render() {
    ReactDOM.render(
        <LaunchPad />,
        document.getElementById('content')
    );
}

render();