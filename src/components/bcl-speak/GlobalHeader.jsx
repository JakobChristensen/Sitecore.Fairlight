import React from "react";

var GlobalHeader = React.createClass({
    render: function() {
        return (
            <header className="sc-globalHeader">
                <div className="row sc-globalHeader-content">
                    <div className="col-md-6">
                        <div className="sc-globalHeader-startButton">
                            <a className="sc-global-logo medium" href="/sitecore/shell/sitecore/client/Applications/Launchpad"></a>
                        </div>
                        <div className="sc-globalHeader-navigationToggler">
                            <div className="sc-navigationPanelToggleButton">
                                <button className="btn sc-togglebutton btn-default noText" type="button">
                                    <div className="sc-icon" style={{backgroundImage: "url(&quot;/sitecore/shell/client/Speak/Assets/img/Speak/NavigationPanelToggleButton/navigationPanelToggleIcon.png&quot;)", backgroundPosition: "50% 50%" }}>
                                    </div>
                                    <span className="sc-togglebutton-text" >
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="sc-globalHeader-loginInfo">
                            <ul className="sc-accountInformation sc_AccountInformation_2">
                                <li><a className="logout" href="/api/sitecore/Authentication/Logout?sc_database=master">Logout</a></li>
                                <li>
                                    Administrator
                                    <img src="/sitecore/shell/client/Speak/img/genius.png" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
});

export default GlobalHeader;
