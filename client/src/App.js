import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import ReviewsContainer from "./components/ReviewsContainer";
import UserControls from "./components/UserControls";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="main-container">
                    {/* Component Responsible for Modals used in: deleting all reviews, 
                delete not recommended reviews, and adding new reviews */}
                    <UserControls />

                    {/* Component that contains all individual Review Components, it's passes an array of all reviews
                to map over and make each element a Review Component*/}
                    <ReviewsContainer />
                </div>
            </Provider>
        );
    }
}

export default App;
