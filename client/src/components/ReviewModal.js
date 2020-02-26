import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import EditReviewForm from "./EditReviewForm";

class ReviewModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            modalType: ""
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    toggleDelete = () => {
        this.setState({
            modalType: "delete"
        });

        this.toggle();
    };

    toggleEdit = () => {
        this.setState({
            modalType: "edit"
        });

        this.toggle();
    };

    deleteReview = e => {
        this.props.deleteReview(this.props.review._id);
        this.toggle();
    };

    editReview = review => {
        console.log(review);
        this.props.editReview(review);
        this.toggle();
    };

    getModalHeader = modalType => {
        if (modalType === "delete") {
            return "Deleting Selected Item";
        } else {
            return "Editing Selected Review";
        }
    };

    getModalBody = modalType => {
        if (modalType === "delete") {
            return "Are you sure you want to delete?";
        } else {
            return (
                <EditReviewForm
                    review={this.props.review}
                    editReview={this.editReview}
                />
            );
        }
    };

    getModalFooter = modalType => {
        if (modalType === "delete") {
            return (
                <Button color="danger" onClick={this.deleteReview}>
                    Delete
                </Button>
            );
        } else {
            return "";
        }
    };

    render() {
        const modalBody = this.getModalBody(this.state.modalType);
        const modalFooter = this.getModalFooter(this.state.modalType);
        const modalHeader = this.getModalHeader(this.state.modalType);

        return (
            <div>
                <i
                    className="fa fa-trash fa-lg red"
                    onClick={this.toggleDelete}
                />
                <i
                    className="fa fa-edit fa-lg blue"
                    id="edit-icon"
                    onClick={this.toggle}
                />
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        {modalHeader}
                    </ModalHeader>
                    <ModalBody>{modalBody}</ModalBody>
                    <ModalFooter>
                        {modalFooter}{" "}
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ReviewModal;
