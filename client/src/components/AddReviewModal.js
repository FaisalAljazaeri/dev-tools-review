import React, { Component } from "react";
import { Modal, Button, ModalHeader, ModalBody } from "reactstrap";
import "./AddReviewModal.css";
import AddReviewForm from "./AddReviewForm";

class AddReviewModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    createReview = review => {
        this.toggle();
        this.props.addReview(review);
    };

    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle} id="add-button">
                    Add Review
                </Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add Review For New Item
                    </ModalHeader>
                    <ModalBody>
                        <AddReviewForm
                            closeModal={this.toggle}
                            createReview={this.createReview}
                        />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AddReviewModal;
