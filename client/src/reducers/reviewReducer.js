import { GET_REVIEWS, NEW_REVIEW, DELETE_REVIEW } from "../actions/types";

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
        default:
            return state;
    }
}
