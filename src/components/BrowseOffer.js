import React from "react";
import searchbarIcon from "../assets/images/main-search-bar-icon.svg";
import bidsMobileIcon from "../assets/images/bids-mobile-menu-icon.svg";
import offerIcon from "../assets/images/offer-img.svg";
import onlineUserIcon from "../assets/images/online-user.svg";


// main-search-bar-icon.svg


export default class BrowseOffer extends React.Component {

    render() {
        return(
            <>
                <div className="container">
                    <div className="content-container main-page only-left-section">
                        <div className="left-section">
                            <div className="user-status">
                                {/* s-on will be used to activate the status  */}
                                <span className="s-outer">
                                    <span className="s-inner"></span>
                                </span>

                                Online Sellers
                            </div>

                            <div className="filter-section">
                                <p className="mb-2 filter-heading">Select category</p>
                                <ul>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            All Categories <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Digital Marketing <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Graphic Design <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Website IT <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className="filter-section">
                                <p className="mb-2 filter-heading">Select Sub-category</p>
                                <ul>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            All Sub Categories <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Article Writing <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Graphic Design <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Digital Marketing <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className="filter-section">
                                <p className="mb-2 filter-heading">Rating</p>
                                <ul>
                                    <li className="mb-3 have-ratings">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </li>
                                </ul>
                            </div>

                            <div className="filter-section">
                                <p className="mb-2 filter-heading">Select Country</p>
                                <ul>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            All Country
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            <select>
                                                <option>Select Country</option>
                                                <option>US</option>
                                                <option>UK</option>
                                                <option>India</option>
                                            </select>
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className="filter-section">
                                <p className="mb-2 filter-heading">Budget</p>
                                <ul>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Any 
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Custom budget 
                                        </label>

                                        <span className="have-range">
                                            <span>
                                                <span className="dollar-sign">$</span>
                                                <input type="number" />
                                                Min
                                            </span>

                                            <span>
                                                <span className="dollar-sign">$</span>
                                                <input type="number" />
                                                Max
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="filter-section">
                                <p className="mb-2 filter-heading">Seller Level</p>
                                <ul>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Any <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Top Rated <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Level One <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Level Two <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            New Seller <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Pro Seller <span className="filter-count">(44,850)</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="middle-section">
                            <div className="search-bar mb-4">
                                <input type="search" placeholder="Search for project" />
                                <img src={searchbarIcon} alt="" />
                            </div>

                            <p className="job-count-result mb-3">
                                <span>45000</span> 
                                Jobs found
                                <span className="mobile-bids-menu-button"><span href="#"><img src={bidsMobileIcon} alt="" /> Menu</span></span>
                            </p>
                        
                            <div className="jobs-list-container">
                                <div className="single-job single-offer pl-4 pr-4 mb-4">
                                    <div className="offer-img">
                                        <img src={offerIcon} alt=""/>
                                    </div>
                                <div>
                                        <div className="job-heading mb-3 pt-2">
                                            <a className="mb-1" href="#">Cera - Pro Community Focused, Multi-Purpose</a>
                                            <div className="offer-user-detail">
                                                <p>
                                                    <span className="small-text">By</span>
                                                    <a href="#">
                                                        Apurba D
                                                        <span className="user-detail-box">
                                                            <span className="u-heading">
                                                                <span className="u-img">
                                                                    <img src={onlineUserIcon} alt="" />
                                                                    <span className="status active"></span>
                                                                </span>
                                                                <span>Apurba D.<br/> United State</span>
                                                                <span className="u-level">Level 2</span>
                                                            </span>
                                                            <span className="u-wrapper">
                                                                <span>Total Sold:8500 Sales</span>
                                                                <span className="u-ratings">
                                                                    <span className="u-num">4.0</span>
                                                                    <span className="have-ratings">
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star"></span>
                                                                    </span>
                                                                    <span>(5k+)</span>
                                                                </span>
                                                            </span>
                                                            <span className="u-footer">
                                                                <span>
                                                                    <span><button className="offer-btn-green">Contact</button></span>
                                                                    <span><button className="offer-btn-black">Profile</button></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <span className="offer-in small-text">In</span>
                                                    Website IT
                                                </p>
                                                
                                                <ul>
                                                    <li>4.0</li>
                                                    <li className="have-ratings">
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star"></span>
                                                    </li>
                                                    <li>(2k+)</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="job-content-detail pb-3">
                                            <div className="job-description">
                                                <p className="mb-2">
                                                    BuddyPress Unique Theme Design Create Community, 
                                                    Shop or Portfolio with blog Launch your E-Learning or Membership site
                                                </p>

                                                <ul className="job-cat mb-3">
                                                    <li>Tags:</li>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>Bootstrap</li>
                                                    <li>SCSS</li>
                                                </ul>

                                                <div className="offer-footer">
                                                    <div className="offer-price">
                                                        <div>
                                                            <h1 className="mb-2">Price</h1>
                                                            <p><strike>$59</strike> <span>$39</span></p>
                                                        </div>
                                                        <div className="total">
                                                            <h1 className="mb-2">Total</h1>
                                                            <p>2500 sales</p>
                                                        </div>
                                                    </div>
                                                    <div className="offer-footer-btn">
                                                        <button className="offer-btn-black">Contact Seller</button>
                                                        <button className="offer-btn-green">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                            </div>

                            <nav className="navigation-nav d-flex justify-content-center mb-4" aria-label="Page navigation example">
                                <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>

                            <button className="custom-button load-more-jobs">Load More</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
} 

