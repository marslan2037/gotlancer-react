import React from "react";
import mainSearchBarIcon from "../assets/images/main-search-bar-icon.svg";

export default class MiddleSectionSearchbar extends React.Component {

    render() {
        return (
            <>
                <div className="search-bar mb-4">
                    <input type="search" placeholder="Search for project" />
                    <img src={mainSearchBarIcon} alt="" />
                </div>
            </>
        )
    }
}

