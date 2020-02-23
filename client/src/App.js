import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import ReviewsContainer from "./components/ReviewsContainer";
import AddReviewModal from "./components/AddReviewModal";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [],
            addReviewModalActive: false
        };
    }

    render() {
        return (
            <div className="container">
                <AddReviewModal isOpen={this.state.addReviewModalActive} />
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
