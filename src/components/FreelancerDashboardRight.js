import React from "react";

export default class FreelancerDashboardRight extends React.Component {

    render() {
        return (
            <>
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
            </>
        )
    }
}