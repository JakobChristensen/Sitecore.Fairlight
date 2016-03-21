import React from 'react';
import ReactDOM from 'react-dom';

import ListPage from '../../components/bcl-pages/ListPage';

var Image = React.createClass({
    selectImage: function() {
        this.props.onSelectImage(this.props.image);
    },

    render: function() {
        return (
            <figure>
                <a href="#" className="image-link" onClick={this.selectImage}>
                    <img src={this.props.image.mediaurl} alt=""/>
                </a>
            </figure>
        );
    }
});

var MediaGalleryRow = React.createClass({
    selectImage: function(image) {
        this.props.onSelectImage(image);
    },
    
    closeDetails: function() {
        this.props.onSelectImage(null);
    },

    render: function() {
        var output = [];
        var selectedImage = null;

        // images
        for (var n = 0; n < this.props.images.length; n++) {
            var image = this.props.images[n];
            var key = image.id;

            output.push(<Image key={key} image={image} onSelectImage={this.selectImage} />);

            if (image.id == this.props.selectedImageId) {
                selectedImage = image;
            }
        }

        // details for selected image
        if (selectedImage != null) {
            output.push(<div key="details" className="image-details">
                <a href="#" className="image-details-close" onClick={this.closeDetails}>Close</a>
                <div className="image-details-content">
                    <figure className="image">
                        <img src={selectedImage.mediaurl} alt=""/>
                    </figure>
                </div>
                <div className="image-details-desc">
                    <h3 className="image-details-title">
                        {selectedImage.name}
                    </h3>
                    <p className="image-details-text">
                        Dimensions: {selectedImage.fields.Width} x {selectedImage.fields.Height}
                    </p>
                    <p className="image-details-text">
                        Artist: {selectedImage.fields.Artist}
                    </p>
                    <p className="image-details-text">
                        Copyright: {selectedImage.fields.Copyright}
                    </p>
                    <p className="image-details-text">
                        Size: {selectedImage.fields.Size} bytes
                    </p>
                </div>
            </div>);
        }

        return (
            <li>
                {output}
            </li>
        );
    }
});

var MediaGallery = React.createClass({
    getInitialState: function() {
        return { selectedImageId: null };
    },

    selectImage: function(image) {
        var selectedImageId = null;
        if (image != null) {
            selectedImageId = image.id == this.state.selectedImageId ? null : image.id;
        }
        
        this.setState(Object.assign({}, this.state, { selectedImageId: selectedImageId }));
    },

    render: function() {
        var output = [];
        var selectedImageId = this.state.selectedImageId;

        // 4 images
        var rowCount = Math.floor(this.props.images.length / 4) + 1;
        
        for (var n = 0; n < rowCount; n++) {
            var images = this.props.images.slice(n * 4, n * 4 + 4);
            var key = "Row" + n;

            output.push(<MediaGalleryRow key={key} images={images} selectedImageId={selectedImageId} onSelectImage={this.selectImage} />);
        }

        return (
            <div className="image-gallery">
                <ul className="image-wrapper">
                    {output}
                </ul>
            </div>
        );
    }
});

var App = React.createClass({
    componentDidMount: function() {
        var data = {
            "Images": "/sitecore/get/items/master?templateid={DAF085E8-602E-43A6-8299-038FF171349F}&path=/sitecore/media library/pictures&fields=*"
        };

        this.serverRequest = $.post("http://localhost:8080/sitecore/get?token=test", data, function(result) {
            this.setState(result);
        }.bind(this));
    },

    render: function() {
        var output = null;

        if (this.state != null) {
            output = <MediaGallery images={this.state.Images.items} />
        }

        return (
            <ListPage id="MediaLibrary" applicationHeader="Media Library">
                {output}
            </ListPage>
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