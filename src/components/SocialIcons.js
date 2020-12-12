import React from "react";

export default class SocialIcons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <div className="footer-social-icons">
                    <a href="#"><i className="fa fa-facebook-f"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                </div>
            </>
        )
    }
}