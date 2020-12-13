import React from "react";
import searchArrowDown from "../assets/images/search-arrow-down.svg";
import searchIcon from "../assets/images/search-icon.svg";

export default class HeaderSearchBar extends React.Component {

    render() {
        return (
            <>
                <div className="search-bar dropdown">
                    <div data-toggle="dropdown">
                        <span><img src={searchIcon} alt="" /></span>
                        <input type="search" placeholder="Search" />
                        <span className="arrow"><img src={searchArrowDown} alt="" /></span>
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

            </>
        )
    }
}