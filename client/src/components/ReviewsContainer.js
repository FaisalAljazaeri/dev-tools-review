import React, { Component } from "react";
import "./ReviewsContainer.css";
import Review from "./Review";

class ReviewsContainer extends Component {
    deleteReview = reviewId => {
        this.props.deleteReview(reviewId);
    };

    toggleRecommended = review => {
        this.props.toggleRecommended(review);
    };

    editReview = review => {
        this.props.editReview(review);
    };

    render() {
        const allReviews = this.props.reviews.map((review, index) => {
            return (
                <Review
                    key={index}
                    review={review}
                    deleteReview={this.props.deleteReview}
                    toggleRecommended={this.toggleRecommended}
                    editReview={this.editReview}
                />
            );
        });
        return <div className="reviews-container">{allReviews}</div>;
    }
}

export default ReviewsContainer;
