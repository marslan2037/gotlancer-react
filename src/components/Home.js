import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from "./Footer";
import BrowseOffer from "./BrowseOffer";
import BuyerDashboard from "./BuyerDashboard";
import FreelancerDashboard from "./FreelancerDashboard";

export default class Home extends React.Component {

    render() {
        return (
            <>
                <div className="main-container">
                    <Header />
                    <FreelancerDashboard/>
                    {/* <BuyerDashboard/> */}
                    <Footer />
                </div>
            </>
        )
    }
}