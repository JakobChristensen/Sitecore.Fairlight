import React from "react";

var Navigation = React.createClass({
    render: function() {
        return (
            <nav className="sc-applicationContent-navigation sc-navigation-menu">
                { this.props.children }
            </nav>
        );
    }
});

export default Navigation;
