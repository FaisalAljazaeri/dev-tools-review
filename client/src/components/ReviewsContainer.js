import React, { Component } from "react";
import "./ReviewsContainer.css";
import Review from "./Review";

class ReviewsContainer extends Component {
    render() {
        const allReviews = this.props.reviews.map(review => {
            return <Review />;
        });
        return <div className="reviews-container">{allReviews}</div>;
    }
}

export default ReviewsContainer;
