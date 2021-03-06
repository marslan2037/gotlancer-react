import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
// import { NavLink } from "react-router-dom";
import HeaderSearchBar from "./HeaderSearchBar";
import checkIcon from "../assets/images/check-icon.svg";
import bellIcon from "../assets/images/bell-icon.svg";
import settingsSettingIcon from "../assets/images/settings-settings-icon.svg";
import userProfileIcon from "../assets/images/settings-user-profile-icon.svg";
import membershipIcon from "../assets/images/membership-icon.svg";
import cartIcon from "../assets/images/cart-icon.svg";
import settingsLogoutIcon from "../assets/images/settings-logout-icon.svg";

export default class Header extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            search_dropdown: false,
            setting_dropdown: false,
        };

    }

    ToggleDropdown = (name) => {
        console.log(name)
        if(name === 'search_dropdown') {
            this.setState({
                search_dropdown: !this.state.search_dropdown,
                setting_dropdown: false,
            })
        } else if(name === 'setting_dropdown') {
            this.setState({
                search_dropdown: false,
                setting_dropdown: !this.state.setting_dropdown
            })
        }
    }

    render() {
        const settings_dropdown = this.state.setting_dropdown;

        return(
            <>
                <header className="fixed-top">
                    <div className="container">
                        <div className="inner-container">
                            <div className="left-header">
                                <h2 className="logo">
                                    <a href="/">GotLancer</a>
                                </h2>
                                
                                <div className="quick-menu">
                                     {/* MOBILE MENU BUTTON START  */}
                                    <span className="mobile-menu-close-button"><i className="fa fa-times"></i></span>
                                    {/* MOBILE MENU BUTTON END */}
                                    {/* <ul className="main-menu">
                                        <li className="mobile-visible">
                                            <div className="user-detail-dropdown">
                                                <div className="user-detail">
                                                    <span className="short-name">SK</span>
                                                    <p className="name">Apurba Das</p>
                                                    <span className="user-type">Buyer</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mobile-visible"><a href="#">Settings</a></li>
                                        <li className="mobile-visible"><a href="#">My Profile</a></li>
                                        <li className="mobile-visible"><a href="#">Membership</a></li>
                                        <li className="mobile-visible"><a href="#">Buy Bid Credit</a></li>
                                        <li>
                                            <a href="#">Projects <i className="fa fa-angle-down"></i></a>
                                            <ul>
                                                <li><a href="#">Find Work</a></li>
                                                <li><a href="#">Saved Jobs</a></li>
                                                <li><a href="#">Proposals</a></li>
                                                <li><a href="#">My Stats</a></li>
                                                <li><a href="#">My Project</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Hire <i className="fa fa-angle-down"></i></a>
                                            <ul>
                                                <li><a href="#">Find Freelancer</a></li>
                                                <li><a href="#">Saved Freelancer</a></li>
                                                <li><a href="#">Hired Freelancer</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Reports <i className="fa fa-angle-down"></i></a>
                                            <ul>
                                                <li><a href="#">Overview</a></li>
                                                <li><a href="#">My Reports</a></li>
                                                <li><a href="#">Proposal History</a></li>
                                                <li><a href="#">Transaction History</a></li>
                                                <li><a href="#">Payment History</a></li>
                                                <li><a href="#">Withdrawal History</a></li>
                                                <li><a href="#">Dispute List</a></li>
                                            </ul>
                                        </li>
                                        <li className="mobile-visible"><a href="#">Logout</a></li>
                                        <li className="mobile-visible">
                                            <div className="user-status">
                                                <button className="active-btn">Online <img src={checkIcon} alt="" /></button>
                                                <button>Away</button>
                                            </div>
                                        </li>
                                    </ul> */}
                                        <ul className="main-menu">
                                            <li><Link to="/browse-offers">Browse</Link></li>
                                            <li><Link to="/buyer-dashboard">Buyer</Link></li>
                                            <li><Link to="/freelancer-dashboard">Freelancer</Link></li>
                                            <li><Link to="/basic-table">Test</Link></li>
                                        </ul>
                                </div>

                                {/* MOBILE MENU BUTTON START */}
                                <span className="mobile-search-button"><i className="fa fa-search"></i></span>
                                {/* MOBILE MENU BUTTON END */}

                                {/* MOBILE MENU BUTTON START */}
                                <span className="mobile-search-close-button"><i className="fa fa-times"></i></span>
                                {/* MOBILE MENU BUTTON END */}

                                {/* HeaderSearchBar */}
                                <HeaderSearchBar />

                                {/* EMPTY GRID ITEMS */}
                                <div className="empty-grid-item"></div>
                                {/* EMPTY GRID ITEMS */}
                            </div>

                            <div className="right-header">
                                <div className="messages">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Inbox 
                                                <span className="message-count">
                                                    <span>5</span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="bell-icon">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src={bellIcon} alt="" /> 
                                                <span className="message-count"><span>5</span></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="user-detail-dropdown dropdown">
                                    <div className="user-detail" data-toggle="dropdown">
                                        <p className="name">Apurba Das</p>
                                        <span className="user-type">Buyer</span>
                                        <span className="short-name">SK</span>
                                    </div>

                                    <div className="dropdown-menu">
                                        <ul>
                                            <li><a href=""><img src={settingsSettingIcon} alt="" /> Settings</a></li>
                                            <li><a href=""><img src={userProfileIcon} alt="" /> My Profile</a></li>
                                            <li><a href=""><img src={membershipIcon} alt="" /> Membership</a></li>
                                            <li><a href=""><img src={cartIcon} alt="" /> Buy Bid Credit</a></li>
                                            <li><a href=""><img src={settingsLogoutIcon} alt="" /> Logout</a></li>
                                        </ul>

                                        <div className="user-status">
                                            <button className="active-btn">Online <img src={checkIcon} alt="" /></button>
                                            <button>Away</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            
                {/* <Button aria-controls="simple-menu" aria-haspopup="true"
                    onClick={() => this.ToggleDropdown('search_dropdown', true)}
                >
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    open={this.state.search_dropdown}
                    onClose={() => this.ToggleDropdown('search_dropdown', false)}
                >
                    <MenuItem onClick={() => this.ToggleDropdown('search_dropdown', false)}>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu> */}
            </>
        )
    }
} 