import { GET_REVIEWS, NEW_REVIEW } from "./types";
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
