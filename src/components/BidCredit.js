import React from "react";

export default class BidCredit extends React.Component {

    render() {
        return (
            <>
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
            </>
        )
    }
}