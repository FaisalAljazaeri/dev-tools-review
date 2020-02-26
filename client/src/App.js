import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import ReviewsContainer from "./components/ReviewsContainer";
import UserControls from "./components/UserControls";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        };
    }

    addReview = review => {
        axios
            .post("http://localhost:5000/api/reviews", review)
            .then(res => {
                this.setState({
                    reviews: [...this.state.reviews, res.data.review]
                });
            })
            .catch(err => console.log(err));
    };

    toggleRecommended = review => {
        const updatedReview = {
            ...review,
            isRecommended: !review.isRecommended
        };

        this.updateReview(updatedReview);
    };

    editReview = updatedReview => {
        this.updateReview(updatedReview);
    };

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

    deleteReview = reviewId => {
        axios
            .delete(`http://localhost:5000/api/reviews/${reviewId}`)
            .then(res => {
                const newReviews = [...this.state.reviews].filter(
                    review => reviewId !== review._id
                );

                this.setState({
                    reviews: newReviews
                });
            });
    };

    render() {
        return (
            <div className="main-container">
                <UserControls
                    addReview={this.addReview}
                    deleteAllReviews={this.deleteAllReviews}
                    deleteNotRecommendedReviews={
                        this.deleteNotRecommendedReviews
                    }
                />

                <ReviewsContainer
                    reviews={this.state.reviews}
                    deleteReview={this.deleteReview}
                    toggleRecommended={this.toggleRecommended}
                    editReview={this.editReview}
                />
            </div>
        );
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/api/reviews")
            .then(res => {
                this.setState({
                    reviews: res.data
                });
            })
            .catch(err => console.log(err));
    }
}

export default App;
