import React, { Component } from "react";
import "./Review.css";

class Review extends Component {
    render() {
        return (
            <div className="review-card">
                <div className="img-container">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy4WeAtfc2HGaPPUzQl63wLibYgOsVJOM9S5B6oTqGRUiFNO-z"
                        alt="Img"
                    />
                </div>
                <div className="review-content">
                    <h3>VS Code</h3>
                    <p>
                        qpjpdojpoqjdpoj oj dpojpo dj d jo djpojd pojdojpo jdoj
                        dpojpojdpo jdpoj djpojdpj djpojddoj dpoj
                        fiqhihqfohfqohqfoihoihqf qfoihofq ihqfoihfq doqjdojqf.
                    </p>
                </div>

                <div className="review-controls">
                    <i className="fa fa-thumbs-up fa-2x"></i>
                </div>
            </div>
        );
    }
}

export default Review;
