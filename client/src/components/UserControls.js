import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./UserControls.css";
import ReviewsControlModal from "./ReviewsControlModal";

class UserControls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            nestedModal: false,
            closeAll: false,
            nestedModalType: ""
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    toggleNested = () => {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    };

    toggleAll = () => {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    };

    toggleAddReview = () => {
        this.toggleNested();
        this.setState({
            nestedModalType: "add"
        });
    };

    addReview = review => {
        this.props.addReview(review);
    };

    toggleDeleteAllReviews = () => {
        this.toggleNested();
        this.setState({
            nestedModalType: "deleteAll"
        });
    };

    deleteAllReviews = () => {
        this.props.deleteAllReviews();
    };

    toggleDeleteNotRecommendedReviews = () => {
        this.toggleNested();
        this.setState({
            nestedModalType: "deleteNotRecommended"
        });
    };

    deleteNotRecommendedReviews = () => {
        this.props.deleteNotRecommendedReviews();
    };

    render() {
        return (
            <div>
                <Button id="action-btn" color="success" onClick={this.toggle}>
                    Actions
                </Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Select an Action to Perform
                    </ModalHeader>
                    <ModalBody>
                        <div className="modal-buttons">
                            <Button
                                color="success"
                                onClick={this.toggleAddReview}
                            >
                                Add Review
                            </Button>
                            <Button
                                color="secondary"
                                onClick={this.toggleDeleteNotRecommendedReviews}
                            >
                                Delete All Not Recommended Reviews
                            </Button>
                            <Button
                                color="danger"
                                onClick={this.toggleDeleteAllReviews}
                            >
                                Delete All Reviews
                            </Button>
                        </div>
                        <ReviewsControlModal
                            addReview={this.addReview}
                            deleteAllReviews={this.deleteAllReviews}
                            deleteNotRecommendedReviews={
                                this.deleteNotRecommendedReviews
                            }
                            modalType={this.state.nestedModalType}
                            nestedModal={this.state.nestedModal}
                            toggle={this.toggle}
                            toggleNested={this.toggleNested}
                            toggleAll={this.toggleAll}
                            closeAll={this.state.closeAll}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default UserControls;
