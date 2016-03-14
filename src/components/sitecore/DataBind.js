import React from "react";

var DataBind = function() {
    this.attr = {};
}

DataBind.prototype.isVisible = function(condition) {
    if (condition) {
        return this;
    }
    
    this.attr.style = this.attr.style || {}; 
    this.attr.style.display = "none";
    
    return this;
}

export default DataBind;