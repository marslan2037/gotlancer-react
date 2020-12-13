import React from "react";

export default class BrowseOffersLeft extends React.Component {

    render() {
        return (
            <>
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

            </>
        )
    }
}
