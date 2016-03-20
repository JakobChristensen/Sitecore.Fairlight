import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from '../../components/bcl-pages/Dashboard';

var Image = React.createClass({
    render: function() {
        return (
            <figure data-title="Image 8" data-desc="Lorem ipsum dolor sit amet.">
                <a href="#" class="image-link">
                    <img src="http://lorempixel.com/400/200/technics" alt=""/>
                </a>
            </figure>
        );
    }
});


var MediaGallery = React.createClass({
    render: function() {
        var images = [];

        for (var n = 0; n < this.props.images.length; n++) {
            images.push(<Image image={this.props.images[n]} />);
        }

        return (
            <div id="images">
                <ul id="image-wrapper">
                    {images}
                </ul>
            </div>
        );
    }
});

var App = React.createClass({
    componentDidMount: function() {
        var data = {
            "Images": "/cd/master/items/sitecore/media library?levels=99&fields=Path"
        };

        this.serverRequest = $.post("http://pathfinder/cd/bundle?token=test", data, function(result) {
            this.setState(result);
        }.bind(this));
    },

    render: function() {
        var output = null;

        if (this.state != null) {
            output = <ImageGallery images={this.state.Images} />
        }

        return (
            <Dashboard id="LaunchPad" applicationHeader="Media Library">
                {output}
            </Dashboard>
        );
    }
});

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById('content')
    );
}

render();