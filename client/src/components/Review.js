import React from "react";
import "./Review.css";
import ReviewModal from "./ReviewModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleReviewRecommendation } from "../actions/reviewActions";

// Component responsible for rendering every Review element Recieved from the ReviewContainer
function Review(props) {
    // Destructing properties of the recieved Review element.
    const { itemName, content, itemImgSrc, isRecommended } = props.review;

    // Determine the style of the Recommended Icon (Thumbs) based on the value of
    // the Review property isRecommended
    const recommendationIconClasses = isRecommended
        ? "fa fa-thumbs-up fa-lg like"
        : "fa fa-thumbs-down fa-lg dislike";

    // Triggered when clicking the THUMBS icon and it triggers the function
    // in the APP to update the the passed review's isRecommended property
    const toggleRecommended = e => {
        // props.toggleRecommended(props.review);
        props.toggleReviewRecommendation(props.review);
    };

    // Triggered when the Edit Review Modal has been submitted. It calls the editReview method in the APP
    // and passes it the
    const editReview = review => {
        props.editReview(review);
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
                    {/* Modal Component that conditionally renders either Edit Review Form Component, 
                    or A delete Review Confirmation */}
                    <ReviewModal
                        editReview={editReview}
                        review={props.review}
                    />
                    <i
                        className={recommendationIconClasses}
                        onClick={toggleRecommended}
                    />
                </div>
            </div>
        </div>
    );
}

Review.propsTypes = {
    toggleReviewRecommendation: PropTypes.func.isRequired
};

export default connect(null, { toggleReviewRecommendation })(Review);
