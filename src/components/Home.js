import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from "./Footer";
import BrowseOffers from "./BrowseOffers";
import BuyerDashboard from "./BuyerDashboard";
import FreelancerDashboard from "./FreelancerDashboard";

export default class Home extends React.Component {

    render() {
        return (
            <>
                <div className="main-container">
                    <Header />
                    <Router>
                        <Switch>
                            <Route exact path='/browse-offers' component={BrowseOffers} />
                            <Route exact path='/buyer-dashboard' component={BuyerDashboard} />
                            <Route exact path='/freelancer-dashboard' component={FreelancerDashboard} />
                        </Switch>
                    </Router>
                    <Footer />
                </div>
                
                
            </>
        )
    }
}