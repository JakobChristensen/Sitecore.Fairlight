import React from "react";
import * as Sitecore from "../sitecore/sitecore";
import * as Speak from "../bcl-speak/bcl-speak";

var Dashboard = React.createClass({
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
                        <Speak.ApplicationHeader id={this.props.Id + ".ApplicationHeader"} title={this.props.applicationHeader} />
                        
                        <section className="sc-applicationContent-main">
                            <div className="row">
                                <div className="col-md-12">
                                    { this.placeholder() }
                                </div> 
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        );
    }
});

export default Dashboard;
