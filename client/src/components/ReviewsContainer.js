import React, { Component } from "react";
import "./ReviewsContainer.css";
import Review from "./Review";
import { connect } from "react-redux";
import { getReviews } from "../actions/reviewActions";
import PropTypes from "prop-types";

// Component that recives a prop of all reviews in the app state and renders them as
// individual Review components.
class ReviewsContainer extends Component {
    // Call the editReview method of App with the recieved review.
    editReview = review => {
        this.props.editReview(review);
    };

    render() {
        // Map all the reviews of the recived array to Review Components
        // and return them from this render method.
        const allReviews = this.props.reviews.map((review, index) => {
            return (
                <Review
                    key={index}
                    review={review}
                    toggleRecommended={this.toggleRecommended}
                    editReview={this.editReview}
                />
            );
        });
        return <div className="reviews-container">{allReviews}</div>;
    }

    componentDidMount() {
        this.props.getReviews();
    }
}

ReviewsContainer.propTypes = {
    reviews: PropTypes.array.isRequired,
    getReviews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    reviews: state.review.reviews
});

export default connect(mapStateToProps, { getReviews })(ReviewsContainer);
