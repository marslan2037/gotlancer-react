import React from "react";
import emptyIcon from "../assets/images/empty-img.svg";

export default class BuyerDashboard extends React.Component {

    render() {
        return (
            <>
                <div className="container">
                    <div className="content-container cards-container mb-4">
                        <div className="inner-container">
                            <div className="main-content cards-list">
                                <div className="single-card total-spend-card p-3">
                                    <h2>Total Spend</h2>
                                    <span className="card-number">$500</span>
        
                                    <span className="card-date">Today 26 Oct, 2020</span>
                                </div>
        
                                <div className="single-card work-in-progress-card p-3">
                                    <h2>Work In Progress</h2>
                                    <span className="card-number">$500</span>
        
                                    <span className="card-date">Today 26 Oct, 2020</span>
                                </div>
                            </div>
        
                            <div className="right-content">
                                <div className="single-card project-complete-card p-3">
                                    <h2>Project Completed</h2>
                                    <span className="card-number">50</span>
        
                                    <span className="card-date">Today 26 Oct, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="content-container">
                        <div className="inner-container">
                            <div className="main-content">
                                <div className="single-content-box mb-4">
                                    <div className="box-heading columns-2 pl-4 pr-4">
                                        <h2>Recent Projects</h2>
                                        <span>3 projects found</span>
                                    </div>
        
                                    <div className="box-detail">
                                        <div className="conent-box-row pl-4 pr-4 pt-3 pb-3">
                                            <div className="row-heading row-data">
                                                <a href="#">I need a logo designer</a>
        
                                                <p>30 <span>(6 New)</span></p>
        
                                                <p>1</p>
        
                                                <p className="price-column">$200.00 USD</p>
                                            </div>
        
                                            <div className="row-detail row-data">
                                                <span>Fixed- Posted 3days ago</span>
        
                                                <span>Proposal</span>
        
                                                <span>Hired</span>
        
                                                <span className="price-column">In Progress</span>
                                            </div>
                                        </div>
        
                                        <div className="conent-box-row pl-4 pr-4 pt-3 pb-3">
                                            <div className="row-heading row-data">
                                                <a href="#">I need a logo designer</a>
        
                                                <p>30 <span>(6 New)</span></p>
        
                                                <p>1</p>
        
                                                <p className="price-column">$200.00 USD</p>
                                            </div>
        
                                            <div className="row-detail row-data">
                                                <span>Fixed- Posted 3days ago</span>
        
                                                <span>Proposal</span>
        
                                                <span>Hired</span>
        
                                                <span className="price-column">In Progress</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="single-content-box mb-4">
                                    <div className="box-heading columns-2 pl-4 pr-4">
                                        <h2>Draft Projects</h2>
                                        <span>0 projects found</span>
                                    </div>
        
                                    <div className="box-detail">
                                        <div className="no-record-found">
                                            <img src={emptyIcon} alt="" />
                                            <h2>No draft project Found</h2>
                                            <p>You did not save any project as draft</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="right-content">
                                <ul className="buttons-list">
                                    <li className="active"><a href="#">Post a Project</a></li>
                                    <li><a href="#">Repeat Hire</a></li>
                                </ul>
        
                                <div className="single-content-box mb-4">
                                    <div className="box-heading pl-4 pr-4">
                                        <h2>COVID-19</h2>
                                    </div>
        
                                    <div className="box-detail pl-4 pr-4 pt-3 pt-3 pb-4">
                                        <p>
                                            See how other businesses are connecting with experts to adjust in these uncertain times. 
                                            Choose a job template to quickly fill projects you need now.
                                        </p>
                                    </div>
                                </div>
        
                                <div className="single-content-box mb-4">
                                    <div className="box-heading pl-4 pr-4">
                                        <h2>Recent Completed</h2>
                                    </div>
        
                                    <div className="box-detail pl-4 pr-4 pt-3 pt-3">
                                        <div className="conent-box-row pb-3 mb-3">
                                            <a href="#">I need a logo designer</a>
                                            <p>Fixed- 3days ago- <span className="status">Completed</span></p>
                                            <span className="price">$200.00 USD</span>
                                        </div>
        
                                        <div className="conent-box-row pb-3 mb-3">
                                            <a href="#">I need a logo designer</a>
                                            <p>Fixed- 3days ago- <span className="status">Completed</span></p>
                                            <span className="price">$200.00 USD</span>
                                        </div>
        
                                        <div className="conent-box-row pb-3 mb-3">
                                            <a href="#">I need a logo designer</a>
                                            <p>Fixed- 3days ago- <span className="status">Completed</span></p>
                                            <span className="price">$200.00 USD</span>
                                        </div>
        
                                        <div className="conent-box-row pb-3 mb-3">
                                            <a href="#">I need a logo designer</a>
                                            <p>Fixed- 3days ago- <span className="status">Completed</span></p>
                                            <span className="price">$200.00 USD</span>
                                        </div>
        
                                        <div className="conent-box-row pb-3 mb-3">
                                            <a href="#">I need a logo designer</a>
                                            <p>Fixed- 3days ago- <span className="status">Completed</span></p>
                                            <span className="price">$200.00 USD</span>
                                        </div>
                                    </div>
        
                                    <button className="custom-button mb-3">View all projects</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}