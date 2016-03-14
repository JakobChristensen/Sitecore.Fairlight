import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import DataGrid from 'react-datagrid';
import * as Bootstrap from 'react-bootstrap';

import * as Speak from '../../components/bcl-speak/bcl-speak';
import ListPage from '../../components/bcl-pages/ListPage';

// initial data
var model = {
    templates: [],
    columns: [
        { name: 'name' },
        { name: 'path' },
        { name: 'id' }
    ]
};

// reducers
function reducer(state, action) {
    switch (action.type) {
        case 'SET_TEMPLATES':
            return Object.assign({}, state, { templates: action.value });
        default:
            return state;
    }
}

// actions
function setTemplates(templates) {
    return { type: 'SET_TEMPLATES', value: templates };
}

// code
var store = createStore(reducer, model)

var AllCampaignActivity = React.createClass({

    componentDidMount: function() {
        this.serverRequest = $.get("http://pathfinder/cd/master/templates", { token: "1" }, function(result) {
            store.dispatch(setTemplates(result.templates));
        }.bind(this));
    },

    render: function() {
        var state = store.getState();
        
        return (
            <ListPage id="MyPage" title="All campaign activities" applicationHeader="All campaign activities" createButton="Create campaign activity 123">
                <Speak.AdvancedExpander id="MyExpander" text="Campaign classification filters" isOpen={true}>
                    <DataGrid idProperty="id" dataSource={state.templates} columns={state.columns} style={{height: 500}} />
                </Speak.AdvancedExpander>
            </ListPage>
        );
    }
});

function render() {
    ReactDOM.render(
        <AllCampaignActivity />,
        document.getElementById('content')
    );
}

store.subscribe(render)
render();