import React, { Component } from "react";
import "./Review.css";
import axios from "axios";

function Review(props) {
    const { itemName, content, itemImgSrc, isRecommended } = props.review;

    const recommendationIconClasses = isRecommended
        ? "fa fa-thumbs-up fa-lg like"
        : "fa fa-thumbs-down fa-lg dislike";

    const toggleRecommended = e => {
        props.toggleRecommended(props.review);
    };

    const deleteReview = e => {
        this.props.deleteReview(props.review._id);
    };

    return (
        <div className="review-card">
            <div className="img-container">
                <img src={itemImgSrc} alt={itemName} />
            </div>
            <div className="card-body">
                <div className="review-content">
                    <h3>{itemName}</h3>
                    <p>{content}</p>
                </div>

                <div className="review-controls">
                    <i
                        className="fa fa-trash fa-lg red"
                        onClick={deleteReview}
                    />
                    <i className="fa fa-edit fa-lg blue" id="edit-icon" />
                    <i
                        className={recommendationIconClasses}
                        onClick={toggleRecommended}
                    />
                </div>
            </div>
        </div>
    );
}

export default Review;
