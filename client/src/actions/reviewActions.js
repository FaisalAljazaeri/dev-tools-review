import {
    GET_REVIEWS,
    NEW_REVIEW,
    DELETE_REVIEW,
    TOGGLE_REVIEW_RECOMMENDATION,
    EDIT_REVIEW,
    DELETE_ALL_REVIEWS,
    DELETE_NOT_RECOMMENDED_REVIEWS
} from "./types";
import axios from "axios";

export const getReviews = () => dispatch => {
    axios
        .get("http://localhost:5000/api/reviews")
        .then(res => {
            dispatch({
                type: GET_REVIEWS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

export const addReview = newReview => dispatch => {
    axios
        .post("http://localhost:5000/api/reviews", newReview)
        .then(res =>
            dispatch({
                type: NEW_REVIEW,
                payload: res.data.review
            })
        )
        .catch(err => console.log(err));
};

export const deleteReview = reviewId => dispatch => {
    axios
        .delete(`http://localhost:5000/api/reviews/${reviewId}`)
        .then(res =>
            dispatch({
                type: DELETE_REVIEW,
                payload: reviewId
            })
        )
        .catch(err => console.log(err));
};

export const toggleReviewRecommendation = review => dispatch => {
    const updatedReview = { ...review, isRecommended: !review.isRecommended };

    axios
        .patch(`http://localhost:5000/api/reviews/${updatedReview._id}`, {
            review: updatedReview
        })
        .then(res => {
            dispatch({
                type: TOGGLE_REVIEW_RECOMMENDATION,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

export const editReview = updatedReview => dispatch => {
    axios
        .patch(`http://localhost:5000/api/reviews/${updatedReview._id}`, {
            review: updatedReview
        })
        .then(res => {
            dispatch({
                type: EDIT_REVIEW,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

export const deleteAllReviews = () => dispatch => {
    axios
        .delete("http://localhost:5000/api/reviews")
        .then(res => {
            dispatch({
                type: DELETE_ALL_REVIEWS
            });
        })
        .catch(err => console.log(err));
};

export const deleteNotRecommendedReviews = () => dispatch => {
    axios
        .delete("http://localhost:5000/api/reviews/notrecommended")
        .then(res => {
            dispatch({
                type: DELETE_NOT_RECOMMENDED_REVIEWS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};
