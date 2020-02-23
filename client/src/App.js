import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import ReviewsContainer from "./components/ReviewsContainer";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        };
    }

    render() {
        return (
            <div>
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
