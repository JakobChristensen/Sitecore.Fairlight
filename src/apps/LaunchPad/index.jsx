import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../../components/bcl-pages/Dashboard';
import * as Speak from '../../components/bcl-speak/bcl-speak';


var LaunchPad = React.createClass({
    // content delivery service configuration - make Url requests and put the result in this.context.data[key], e.g. this.context.data.TitleText
    dataSources: {
       "TitleText": "/cd/core/items/sitecore/client/Applications/Launchpad/PageSettings/TitleText?fields=Text",
       "Buttons" : "/cd/core/items/sitecore/client/Applications/Launchpad/PageSettings/Buttons?levels=2&fields=Text, Icon[icon48x48], Link[url]" 
    },
    
    componentDidMount: function() {
        this.serverRequest = $.post("http://pathfinder/cd/bundle?token=test", this.dataSources, function(data) { this.setState(data); }.bind(this));
    },

    render: function() {
        var output = null;

        if (this.state && this.state.Buttons) {
            var grids = this.getGrids(this.state.Buttons);
            output = this.renderGrids(grids);
        }

        var applicationHeader = this.state && this.state.TitleText ? this.state.TitleText.fields.Text : "";

        return (
            <Dashboard id="LaunchPad" applicationHeader={applicationHeader}>
                <div className="sc-launchpad">
                    { output }
                </div>
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
        var icon = item.fields.Icon;
        var text = item.fields.Text;
        var href = item.fields.Link;

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

    // 
    getGrids: function(buttons) {
        var grids = [];

        for (var groupIndex = 0; groupIndex < buttons.children.length; groupIndex++) {
            var grid = [];

            var group = buttons.children[groupIndex];
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
