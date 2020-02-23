import React, { Component } from "react";
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
}

export default App;
