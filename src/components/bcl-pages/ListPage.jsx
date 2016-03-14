import React from "react";
import * as Bootstrap from "react-bootstrap";
import * as Sitecore from "../sitecore/sitecore";
import * as Speak from "../bcl-speak/bcl-speak";

var ListPage = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        applicationHeader: React.PropTypes.string.isRequired
    },
    
    mixins: [Sitecore.PlaceholderMixin],
    
    render: function() {
        return (
            <div className="sc-list">
                <div className="container-narrow">
                    <Speak.GlobalHeader />
                    <section className="sc-applicationContent">
                        <div className="sc-navigation-wrapper">
                            <Speak.Navigation>
                                <Bootstrap.Button className="sc-button lg" bsStyle="primary">{this.props.createButton}</Bootstrap.Button>
                                { this.placeholder(this.props.id + ".Navigation") }
                            </Speak.Navigation>
                        </div>
                        <div className="sc-navigation-content">
                            <Speak.ApplicationHeader id={this.props.Id + ".ApplicationHeader"} title={this.props.applicationHeader} />
                            <section className="sc-applicationContent-main">
                                { this.placeholder() }
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
});

export default ListPage;
