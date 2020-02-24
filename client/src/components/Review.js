import React, { Component } from "react";
import "./Review.css";
import axios from "axios";

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isRecommended: this.props.review.isRecommended
        };
    }

    toggleRecommended = e => {
        const { _id } = this.props.review;

        this.setState({
            isRecommended: !this.state.isRecommended
        });

        axios.patch(`http://localhost:5000/api/reviews/${_id}`);
    };

    deleteReview = e => {
        this.props.deleteReview(this.props.review._id);
    };

    render() {
        const { itemName, content, itemImgSrc } = this.props.review;

        const recommendationIconClasses = this.state.isRecommended
            ? "fa fa-thumbs-up fa-lg like"
            : "fa fa-thumbs-down fa-lg dislike";

        return (
            <div className="review-card">
                <div className="img-container">
                    <img src={itemImgSrc} alt={itemName} />
                </div>
                <div className="card-body">
                    <div className="review-content">
                        <h3>{itemName}</h3>
                        <p>{content}</p>
                    </div>

                    <div className="review-controls">
                        <i
                            className="fa fa-trash fa-lg red"
                            onClick={this.deleteReview}
                        />
                        <i className="fa fa-edit fa-lg blue" id="edit-icon" />
                        <i
                            className={recommendationIconClasses}
                            onClick={this.toggleRecommended}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Review;
