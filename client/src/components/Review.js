import React, { Component } from "react";
import "./Review.css";

class Review extends Component {
    render() {
        const {
            itemName,
            content,
            itemImgSrc,
            isRecommended
        } = this.props.review;

        return (
            <div className="review-card">
                <div className="img-container">
                    <img src={itemImgSrc} alt={itemName} />
                </div>
                <div className="review-content">
                    <h3>{itemName}</h3>
                    <p>{content}</p>
                </div>

                <div className="review-controls">
                    <i className="fa fa-thumbs-up fa-2x"></i>
                </div>
            </div>
        );
    }
}

export default Review;
