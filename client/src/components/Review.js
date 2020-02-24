import React from "react";
import "./Review.css";
import EditReviewModal from "./EditReviewModal";

function Review(props) {
    const { itemName, content, itemImgSrc, isRecommended } = props.review;

    const recommendationIconClasses = isRecommended
        ? "fa fa-thumbs-up fa-lg like"
        : "fa fa-thumbs-down fa-lg dislike";

    const toggleRecommended = e => {
        props.toggleRecommended(props.review);
    };

    const deleteReview = e => {
        props.deleteReview(props.review._id);
    };

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
                    <i
                        className="fa fa-trash fa-lg red"
                        onClick={deleteReview}
                    />
                    <EditReviewModal
                        review={props.review}
                        editReview={editReview}
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

export default Review;
