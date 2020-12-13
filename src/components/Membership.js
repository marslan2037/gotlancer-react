import React from "react";
import logoIcon from "../assets/images/logo.svg";

export default class Membership extends React.Component {

    render() {
        return (
            <>
                <div className="single-content-box mb-4">
                    <div className="box-heading pl-3 pr-3">
                        <h2>Membership</h2>
                    </div>

                    <div className="box-detail pl-3 pr-3 pt-2 pb-3">
                        <p className="mb-4">Current membership</p>
                        <p className="have-grid column-2 mb-3"><img src={logoIcon} alt="" /> <span className="plan-name">Basic</span></p>
                        <button className="custom-button">Upgrade membership</button>
                    </div>
                </div>

            </>
        )
    }
}