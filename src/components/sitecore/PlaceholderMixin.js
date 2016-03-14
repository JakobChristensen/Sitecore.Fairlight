import React from "react";

var PlaceholderMixin = {
    placeholder: function(placeholder) {
        var children = React.Children.toArray(this.props.children);
        if (!children) {
            return;
        }

        if (!placeholder) {
            return children.filter((child, i) => {
                return child && (!child.props || !child.props.placeholder);
            });
        }

        return children.filter((child, i) => {
            return child && child.props && child.props.placeholder === placeholder;
        });
    }
};

export default PlaceholderMixin;