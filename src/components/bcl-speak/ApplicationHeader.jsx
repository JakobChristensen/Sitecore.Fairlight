import React from "react";
import * as Sitecore from "../sitecore/sitecore";

var ApplicationHeader = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired
    },
    
    mixins: [Sitecore.PlaceholderMixin],

    render: function() {
        return (
            <header className="sc-applicationHeader">
                <div className="sc-applicationHeader-row1">
                    <div className="sc-applicationHeader-content">
                        <div className="sc-applicationHeader-title">
                            <span className="sc-text">{ this.props.title }</span>
                        </div>
                    </div>
                    <div className="sc-applicationHeader-content breadcrumb">
                        <div className="sc-applicationHeader-breadCrumb">
                            <div data-sc-id="Breadcrumb" className="sc-breadcrumb" style={{ display: "none" }}>
                                <ul>
                                    <li><a href="/sitecore/shell/sitecore/client/Applications/CampaignManager/Dashboard">All campaign activities</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sc-applicationHeader-row2">
                    <div className="sc-applicationHeader-back">
                        { this.placeholder(this.props.id + ".Back") }
                    </div>
                    <div className="sc-applicationHeader-contextSwitcher">
                        { this.placeholder(this.props.id + ".ContextSwitcher") }
                    </div>
                    <div className="sc-applicationHeader-actions">
                        { this.placeholder(this.props.id + ".Actions") }
                    </div>
                </div>
            </header>
        );
    }
});

export default ApplicationHeader;
