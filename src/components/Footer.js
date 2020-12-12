import React, { Component } from "react";

export default class Footer extends React.Component {
    constructor(props){
    super(props);}

    render(){
        return(
            <>
                {/* <!-- FOOTER START --> */}
                <footer>
                    <div className="container">
                        <div className="row">
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

                <div className="footer-bottom-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center justify-content-start justify-content-center order-1 order-lg-0 copyright-text">
                                <p>© 2018 - 2020 Gotlancer® Gotlancer Pvt Ltd.</p>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center">
                                <span>Follow us:</span>
                                <div className="footer-social-icons">
                                    <a href="#"><i className="fa fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- FOOTER END --> */}
            </>
        )
    }

}
