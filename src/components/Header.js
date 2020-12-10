import React from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
export default class Header extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)

        this.state = {
            search_dropdown: false,
            setting_dropdown: false,
        };

    }

    ToggleDropdown = (name, value) => {
        if(name === 'search_dropdown') {
            this.setState({
                search_dropdown: value
            })
        } else if(name === 'settings_dropdown') {
            this.setState({
                setting_dropdown: value
            })
        }
    }
    

    render() {
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
                                    <ul className="main-menu">
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
                                                <button className="active-btn">Online <img src="images/check-icon.svg" alt="" /></button>
                                                <button>Away</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* MOBILE MENU BUTTON START */}
                                <span className="mobile-search-button"><i className="fa fa-search"></i></span>
                                {/* MOBILE MENU BUTTON END */}

                                {/* MOBILE MENU BUTTON START */}
                                <span className="mobile-search-close-button"><i className="fa fa-times"></i></span>
                                {/* MOBILE MENU BUTTON END */}

                                <div className="search-bar dropdown">
                                    <div data-toggle="dropdown">
                                        <span><img src="images/search-icon.svg" alt="" /></span>
                                        <input type="search" placeholder="Search"/>
                                        <span className="arrow"><img src="images/search-arrow-down.svg" alt="" /></span>
                                    </div>

                                    <div id="search-box-wrapper" className="dropdown-menu search-dropdown">
                                        <div className="dropdown-header">
                                            Buyers can
                                        </div>
                                        <div className="search-dropdown-item offers">
                                            <a href="https://www.google.com/">Search <span className="standout">offers</span> <span className="helper">to buy now</span></a>
                                        </div>
                                        <div className="search-dropdown-item freelancers">
                                            <a href="https://www.google.com/">Search <span className="standout">freelancers</span> <span className="helper">to request a proposal</span></a>
                                        </div>
                                        <div className="dropdown-header">
                                            Freelancers can
                                        </div>
                                        <div className="search-dropdown-item projects">
                                            <a href="https://www.google.com/">Search <span className="standout">projects</span> <span className="helper">to quote on</span></a>
                                        </div>
                                    </div>
                                </div>

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
                                                <img src="images/bell-icon.svg" alt="" /> 
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
                                            <li><a href=""><img src="images/settings-settings-icon.svg" alt="" /> Settings</a></li>
                                            <li><a href=""><img src="images/settings-user-profile-icon.svg" alt="" /> My Profile</a></li>
                                            <li><a href=""><img src="images/membership-icon.svg" alt="" /> Membership</a></li>
                                            <li><a href=""><img src="images/cart-icon.svg" alt="" /> Buy Bid Credit</a></li>
                                            <li><a href=""><img src="images/settings-logout-icon.svg" alt="" /> Logout</a></li>
                                        </ul>

                                        <div className="user-status">
                                            <button className="active-btn">Online <img src="images/check-icon.svg" alt="" /></button>
                                            <button>Away</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            
                <Button aria-controls="simple-menu" aria-haspopup="true"
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
                </Menu>
            </>
        )
    }
} 