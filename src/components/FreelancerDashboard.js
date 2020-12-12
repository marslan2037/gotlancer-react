import React from "react";
import profileIcon from "../assets/images/profile-pic.svg";
import topRatedIcon from "../assets/images/top-rated-star.svg";
import logoIcon from "../assets/images/logo.svg";
import mainSearchBarIcon from "../assets/images/main-search-bar-icon.svg";
import clockIcon from "../assets/images/clock-icon.svg";
import dollarIcon from "../assets/images/dollar-icon.svg";
import startIcon from "../assets/images/start-icon.svg";
import locationIcon from "../assets/images/location-icon.svg";
import heartIcon from "../assets/images/heart-icon.svg";

export default class FreelancerDashboard extends React.Component {

    render() {
        return (
            <>
               <div className="container">
                    <div className="content-container main-page">
                        <div className="left-section">
                            <div className="single-content-box mb-4">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item"><a className="nav-link active show" href="#profile" role="tab" data-toggle="tab">Profile</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#funds" role="tab" data-toggle="tab">Funds</a></li>
                                </ul>
                                
                                {/* Tab panes */}
                                <div className="tab-content pt-2">
                                    <div role="tabpanel" className="tab-pane fade active show profile-tab" id="profile">
                                        <div className="user-detail mb-2 pl-3 pr-3">
                                            <div className="profile-pic">
                                                <img src={profileIcon} alt="" />
                                            </div>

                                            <div className="user-name">
                                                <h2>Apurba Das</h2>
                                                <span><img src={topRatedIcon} /> TOP RATED</span>
                                            </div>
                                       
                                        </div>

                                        <div className="profile-completeness pl-3 pr-3 mb-2">
                                            <p className="completeness-result">80% completed</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p>Pass the US Engli - level 1 (+10%)</p>
                                        </div>

                                        <a href="#" className="view-profile pl-3 pr-3">
                                            View Profile
                                        </a>
                                    </div>

                                    <div role="tabpanel" className="tab-pane fade funds-tab pl-3 pr-3 pt-2 pb-2" id="funds">
                                        Funds
                                    </div>
                                </div>
                            </div>
                            
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

                            <div className="single-content-box mb-4">
                                <div className="box-heading pl-3 pr-3">
                                    <h2>Bid Credit</h2>
                                </div>

                                <div className="box-detail pl-3 pr-3 pt-2 pb-3">
                                    <p className="mb-3">Available Bids</p>

                                    <p className="mb-3 font-weight-bold">76</p>

                                    <button className="custom-button">Buy Proposal Credit</button>
                                </div>
                            </div>
                        </div>

                        <div className="middle-section">
                            <div className="search-bar mb-4">
                                <input type="search" placeholder="Search for project" />
                                <img src={mainSearchBarIcon} alt="" />
                            </div>

                            <p className="job-count-result mb-3"><span>45000</span> Jobs found</p>

                            <div className="jobs-list-container">
                                <div className="single-job featured-job p-3 pl-4 pr-4 mb-4">
                                    <div className="job-heading mb-3">
                                        <a href="#">Logo Designer Need</a>

                                        <ul className="small-box-cards">
                                            <li className="pt-blue-card">NDA</li>
                                            <li className="pt-yellow-card">Featured</li>
                                        </ul>
                                    </div>

                                    <div className="job-content-detail pb-3">
                                        <div className="job-description">
                                            <p className="mb-4">
                                                Greg is a product strategy consultant and trainer with nearly 20 years of experience shipping digital enterprise products at IBM, 
                                                Microsoft, and products and enterprise scale. <a href="#" className="view-more">View More</a>
                                            </p>

                                            <ul className="job-cat">
                                                <li>Adobe Illustrator</li>
                                                <li>Adobe Photoshop</li>
                                                <li>Logo Design</li>
                                            </ul>
                                        </div>

                                        <div className="job-type-detail">
                                            <div className="price-type">
                                                <p className="price mb-2">$500 USD</p>
                                                <p className="type">FIXED</p>
                                            </div>
                                            <p className="job-timing">Posted 5 minutes ago</p>
                                        </div>
                                    </div>

                                    <div className="buyer-detail pt-3">
                                        <div className="item">
                                            <div className="icon"><img src={clockIcon} alt="" /></div>
                                            <p>
                                                Apply Before 
                                                <span>1 days 2hours</span>
                                            </p>
                                        </div>

                                        <div className="item">
                                            <div className="icon"><img src={dollarIcon} alt="" /></div>
                                            <p>
                                                Payment Method 
                                                <span>Varified</span>
                                            </p>
                                        </div>
                                        
                                        <div className="item">
                                            <div className="icon"><img src={startIcon} alt="" /></div>
                                            <p>
                                                0 Reviews
                                                <span className="reviews-list">
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                </span>
                                            </p>
                                        </div>

                                        <div className="item">
                                            <div className="icon"><img src={locationIcon} alt="" /></div>
                                            <p>
                                                Buyer Country
                                                <span className="country">United State</span>
                                            </p>
                                        </div>

                                        <div className="item saved-column">
                                            <p>Saved</p>
                                            <div className="icon"><img src={heartIcon} alt="" /></div>
                                            {/* <p>
                                                Apply Before 
                                                <span>1 days 2hours</span>
                                            </p>  */}
                                        </div>
                                    </div>
                                </div>

                                <div className="single-job p-3 pl-4 pr-4 mb-4">
                                    <div className="job-heading mb-3">
                                        <a href="#">Logo Designer Need</a>

                                        <ul className="small-box-cards">
                                            <li className="pt-blue-card">NDA</li>
                                            <li className="urgent-card">Urgent</li>
                                        </ul>
                                    </div>

                                    <div className="job-content-detail pb-3">
                                        <div className="job-description">
                                            <p className="mb-4">
                                                Greg is a product strategy consultant and trainer with nearly 20 years of experience shipping digital enterprise products at IBM, 
                                                Microsoft, and products and enterprise scale. <a href="#" className="view-more">View More</a>
                                            </p>

                                            <ul className="job-cat">
                                                <li>Adobe Illustrator</li>
                                                <li>Adobe Photoshop</li>
                                                <li>Logo Design</li>
                                            </ul>
                                        </div>

                                        <div className="job-type-detail">
                                            <div className="price-type">
                                                <p className="price mb-2">$500 USD</p>
                                                <p className="type">FIXED</p>
                                            </div>
                                            <p className="job-timing">Posted 5 minutes ago</p>
                                        </div>
                                    </div>

                                    <div className="buyer-detail pt-3">
                                        <div className="item">
                                            <div className="icon"><img src={clockIcon} alt="" /></div>
                                            <p>
                                                Apply Before 
                                                <span>1 days 2hours</span>
                                            </p>
                                        </div>

                                        <div className="item">
                                            <div className="icon"><img src={dollarIcon} alt="" /></div>
                                            <p>
                                                Payment Method 
                                                <span>Varified</span>
                                            </p>
                                        </div>
                                        
                                        <div className="item">
                                            <div className="icon"><img src={startIcon} alt="" /></div>
                                            <p>
                                                0 Reviews
                                                <span className="reviews-list">
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                </span>
                                            </p>
                                        </div>

                                        <div className="item">
                                            <div className="icon"><img src={locationIcon} alt="" /></div>
                                            <p>
                                                Buyer Country
                                                <span className="country">United State</span>
                                            </p>
                                        </div>

                                        <div className="item saved-column">
                                            <p>Saved</p>
                                            <div className="icon"><img src={heartIcon} alt="" /></div>
                                            {/* <p>
                                                Apply Before 
                                                <span>1 days 2hours</span>
                                            </p> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="single-job p-3 pl-4 pr-4 mb-4">
                                    <div className="job-heading mb-3">
                                        <a href="#">Logo Designer Need</a>

                                        <ul className="small-box-cards">
                                            <li className="pt-blue-card">NDA</li>
                                            <li className="pt-red-card">Long Term</li>
                                        </ul>
                                    </div>

                                    <div className="job-content-detail pb-3">
                                        <div className="job-description">
                                            <p className="mb-4">
                                                Greg is a product strategy consultant and trainer with nearly 20 years of experience shipping digital enterprise products at IBM, 
                                                Microsoft, and products and enterprise scale. <a href="#" className="view-more">View More</a>
                                            </p>

                                            <ul className="job-cat">
                                                <li>Adobe Illustrator</li>
                                                <li>Adobe Photoshop</li>
                                                <li>Logo Design</li>
                                            </ul>
                                        </div>

                                        <div className="job-type-detail">
                                            <div className="price-type">
                                                <p className="price mb-2">$500 USD</p>
                                                <p className="type">FIXED</p>
                                            </div>
                                            <p className="job-timing">Posted 5 minutes ago</p>
                                        </div>
                                    </div>

                                    <div className="buyer-detail pt-3">
                                        <div className="item">
                                            <div className="icon"><img src={clockIcon} alt="" /></div>
                                            <p>
                                                Apply Before 
                                                <span>1 days 2hours</span>
                                            </p>
                                        </div>

                                        <div className="item">
                                            <div className="icon"><img src={dollarIcon} alt="" /></div>
                                            <p>
                                                Payment Method 
                                                <span>Varified</span>
                                            </p>
                                        </div>
                                        
                                        <div className="item">
                                            <div className="icon"><img src={startIcon} alt="" /></div>
                                            <p>
                                                0 Reviews
                                                <span className="reviews-list">
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                    <span><img src={startIcon} alt="" /></span>
                                                </span>
                                            </p>
                                        </div>

                                        <div className="item">
                                            <div className="icon"><img src={locationIcon} alt="" /></div>
                                            <p>
                                                Buyer Country
                                                <span className="country">United State</span>
                                            </p>
                                        </div>

                                        <div className="item saved-column">
                                            <p>Saved</p>
                                            <div className="icon"><img src={heartIcon} alt="" /></div>
                                            {/* <p>
                                                Apply Before 
                                                <span>1 days 2hours</span>
                                            </p> */}
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
                        
                        <div className="right-section">
                            <div className="filter-section">
                                <p className="mb-3 filter-heading font-weight-semi-bold">Select category</p>
                                <ul>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            All
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Website Development
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Graphic Design
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Digital Marketing
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className="filter-section">
                                <p className="mb-3 filter-heading font-weight-semi-bold">Select Sub-category</p>
                                <ul>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            All
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Website Development
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Graphic Design
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Digital Marketing
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className="filter-section">
                                <p className="mb-3 filter-heading font-weight-semi-bold">Project Type</p>
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
                                            Fixed Price
                                        </label>
                                    </li>
                                    <li className="mb-3">
                                        <label className="have-custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="check-box"><i className="fa fa-check"></i></span> 
                                            Hourly
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}