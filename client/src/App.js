import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import ReviewsContainer from "./components/ReviewsContainer";
import AddReviewModal from "./components/AddReviewModal";

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

    render() {
        return (
            <div className="container">
                <AddReviewModal addReview={this.addReview} />
                <ReviewsContainer reviews={this.state.reviews} />
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
