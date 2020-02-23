import React, { Component } from "react";
import "./ReviewsContainer.css";
import Review from "./Review";

class ReviewsContainer extends Component {
    changeRecommendation = reviewId => {
        this.props.changeRecommendation(reviewId);
    };

    render() {
        const allReviews = this.props.reviews.map((review, index) => {
            return (
                <Review
                    key={index}
                    review={review}
                    changeRecommendation={this.changeRecommendation}
                />
            );
        });
        return <div className="reviews-container">{allReviews}</div>;
    }
}

export default ReviewsContainer;
