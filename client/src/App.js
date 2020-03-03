import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import ReviewsContainer from "./components/ReviewsContainer";
import UserControls from "./components/UserControls";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        };
    }

    // Function that takes a modified and updates it
    editReview = updatedReview => {
        // Pass the updated review to the fucntion that will update the state and backend
        this.updateReview(updatedReview);
    };

    // Make a PATCH call to the server with an updated review and change the state to reflect changes
    updateReview = updatedReview => {
        axios
            .patch(`http://localhost:5000/api/reviews/${updatedReview._id}`, {
                review: updatedReview
            })
            .then(res => {
                const reviewsCopy = [...this.state.reviews];
                const indexOfReviewToUpdate = reviewsCopy.findIndex(
                    review => updatedReview._id === review._id
                );

                reviewsCopy.splice(indexOfReviewToUpdate, 1, res.data);

                this.setState({
                    reviews: reviewsCopy
                });
            })
            .catch(err => console.log(err));
    };

    // Function that makes a DELETE request to the server to delete all Reviews from DB
    deleteAllReviews = () => {
        axios
            .delete("http://localhost:5000/api/reviews")
            .then(res => {
                this.setState({
                    reviews: res.data
                });
            })
            .catch(err => console.log(err));
    };

    // Function that makes a DELETE request to the server to delete all Reviews that aren't recommended from DB
    deleteNotRecommendedReviews = () => {
        axios
            .delete("http://localhost:5000/api/reviews/notrecommended")
            .then(res => {
                this.setState({
                    reviews: res.data
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Provider store={store}>
                <div className="main-container">
                    {/* Component Responsible for Modals used in: deleting all reviews, 
                delete not recommended reviews, and adding new reviews */}
                    <UserControls
                        deleteAllReviews={this.deleteAllReviews}
                        deleteNotRecommendedReviews={
                            this.deleteNotRecommendedReviews
                        }
                    />

                    {/* Component that contains all individual Review Components, it's passes an array of all reviews
                to map over and make each element a Review Component*/}
                    <ReviewsContainer
                        toggleRecommended={this.toggleRecommended}
                        editReview={this.editReview}
                    />
                </div>
            </Provider>
        );
    }
}

export default App;
