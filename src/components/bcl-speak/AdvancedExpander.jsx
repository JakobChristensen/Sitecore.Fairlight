import * as React from 'react';
import * as Sitecore from "../sitecore/sitecore";

var AdvancedExpander = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        isCollapsible: React.PropTypes.bool,
        isOpen: React.PropTypes.bool,
        text: React.PropTypes.string.isRequired
    },

    mixins: [Sitecore.PlaceholderMixin],

    getDefaultProps: function() {
        return {
            isCollapsible: true,
            isOpen: true
        };
    },

    getInitialState: function() {
        return {
            isOpen: this.props.isOpen
        };
    },

    close: function() {
        if (!this.props.isCollapsible) {
            return;
        }

        this.setState({
            isOpen: false
        });
    },

    open: function() {
        if (!this.props.isCollapsible) {
            return;
        }

        this.setState({
            isOpen: true
        });
    },

    toggle: function() {
        if (!this.props.isCollapsible) {
            return;
        }

        this.setState({
            isOpen: !this.state.isOpen
        });
    },
    
    render: function() {
        var attr = new Sitecore.DataBind().isVisible(this.state.isOpen).attr;

        return (
            <div className="sc-advancedExpander">
                <div className="sc-advancedExpander-header" onClick={ this.toggle }>
                    <table>
                        <tbody>
                            <tr>
                                <td className="sc-advancedExpander-header-icon-container">
                                </td>
                                <td className="sc-advancedExpander-header-title">
                                    <span className="sc-advancedExpander-header-title-text">{ this.props.text }</span>
                                </td>
                                <td className="sc-advancedExpander-header-actionbar sc-actionbar-collapsed">
                                    <div className="sc-advancedExpander-header-actionbar-container" style={{ display: "none" }}>
                                        { this.placeholder(this.props.id + ".ActionBar") }
                                    </div>
                                </td>
                                <td className="sc-advancedExpander-header-chevron">
                                    <a href="#">
                                        <span className="sc-advancedExpander-header-chevron-glyph"></span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="sc-advancedExpander-header-promotedfields" colSpan="4">
                                    { this.placeholder(this.props.id + ".PromotedFields") }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="sc-advancedExpander-body" { ...attr }>
                    <div className="sc-advancedExpander-bodywrapper" style={{ height: "100%" }}>

                        { this.placeholder() }
                        
                        <div className="sc-advancedExpander-footer" style={{ display: "none" }}>
                            <div className="sc-advancedExpander-footer-less" style={{ display: "none" }}>
                                <a href="#">Less</a>
                            </div>
                            <div className="sc-advancedExpander-footer-more">
                                <a href="#">More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default AdvancedExpander;
