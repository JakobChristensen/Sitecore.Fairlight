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
        return (
            <Dashboard id="LaunchPad" applicationHeader="Sitecore Experience Management">
            </Dashboard>
        );
    }
});

function render() {
    ReactDOM.render(
        <AllCampaignActivity />,
        document.getElementById('content')
    );
}

render();