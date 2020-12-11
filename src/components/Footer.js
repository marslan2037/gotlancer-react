import React, { Component } from "react";

export default class Footer extends React.Component {
    constructor(props){
    super(props);}

    render(){
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-3">
                            <div className="single-footer-widget widget-1">
                                <div className="footer-logo">
                                    <img src="images/white-logo.png" alt="gotlancer"/>
                                </div>
                                <div className="softwares">
                                    <a href="#"><img src="images/playstore.png" alt=""/></a>
                                    <a href="#"><img src="images/appstore.png" alt=""/></a>
                                </div>
                                <div className="language-dropdown">
                                    <div className="nice-select" tabindex="0">
                                        <span className="current">English</span>
                                        <ul className="list">
                                            <li data-value="" className="option selected">English</li>
                                            <li data-value="" className="option">Hindi</li>
                                            <li data-value="" className="option">Bengali</li>
                                            <li data-value="" className="option">French</li>
                                        </ul>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="single-footer-widget">
                                <h4>Network</h4>
                                <ul>
                                    <li><a href="#">Browse Categories</a></li>
                                    <li><a href="#">Browse Projects</a></li>
                                    <li><a href="#">Browse Freelancers</a></li>
                                    <li><a href="#">Browse Contest</a></li>
                                    <li><a href="#">Browse Offers</a></li>
                                    <li><a href="#">Escrow</a></li>
                                    <li><a href="#">Affiliate Program</a></li>
                                    <li><a href="#">Desktop App download</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="single-footer-widget">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Gotlancer Foundation</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Trust, Safety &amp; Security</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Accessibility</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="#">Code of Conduct</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="single-footer-widget no-margin">
                                <h4>Freelancers</h4>
                                <ul>
                                    <li><a href="#">Freelancers by Skill</a></li>
                                    <li><a href="#">Freelancers in USA</a></li>
                                    <li><a href="#">Freelancers in UK</a></li>
                                    <li><a href="#">Freelancers in Canada</a></li>
                                    <li><a href="#">Freelancers in Australia</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

}
