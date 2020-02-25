import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ReviewsControlModal from "./ReviewsControlModal";

class UserControls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            nestedModal: false,
            closeAll: false,
            nestedModalBody: ""
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
            nestedModalBody: "add"
        });
    };

    addReview = review => {
        this.props.addReview(review);
    };

    toggleDeleteAllReviews = () => {
        this.toggleNested();
        this.setState({
            nestedModalBody: "deleteAll"
        });
    };

    deleteAllReviews = () => {
        this.props.deleteAllReviews();
    };

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>
                    Label
                </Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                        <br />
                        <Button color="success" onClick={this.toggleAddReview}>
                            Add Review
                        </Button>
                        <Button
                            color="danger"
                            onClick={this.toggleDeleteAllReviews}
                        >
                            Delete All Reviews
                        </Button>
                        <ReviewsControlModal
                            addReview={this.addReview}
                            deleteAllReviews={this.deleteAllReviews}
                            modalBody={this.state.nestedModalBody}
                            nestedModal={this.state.nestedModal}
                            toggle={this.toggle}
                            toggleNested={this.toggleNested}
                            toggleAll={this.toggleAll}
                            closeAll={this.state.closeAll}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                            Do Something
                        </Button>{" "}
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
