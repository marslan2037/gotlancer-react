import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Home extends React.Component {

    render() {
        return (
            <>
                <div className="main-container">
                    <Header />
                    <Footer />
                </div>
            </>
        )
    }
}