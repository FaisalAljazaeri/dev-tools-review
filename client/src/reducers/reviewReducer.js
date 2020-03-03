import {
    GET_REVIEWS,
    NEW_REVIEW,
    DELETE_REVIEW,
    TOGGLE_REVIEW_RECOMMENDATION,
    EDIT_REVIEW
} from "../actions/types";

const initialState = {
    reviews: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            };
        case NEW_REVIEW:
            return {
                reviews: [...state.reviews, action.payload]
            };
        case DELETE_REVIEW:
            return {
                reviews: state.reviews.filter(
                    review => review._id !== action.payload
                )
            };
        case TOGGLE_REVIEW_RECOMMENDATION:
            return {
                reviews: state.reviews.map(review =>
                    action.payload._id === review._id ? action.payload : review
                )
            };
        case EDIT_REVIEW:
            return {
                reviews: state.reviews.map(review =>
                    action.payload._id === review._id ? action.payload : review
                )
            };
        default:
            return state;
    }
}
