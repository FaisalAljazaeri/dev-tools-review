import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

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

    deleteReview = e => {
        this.props.deleteReview(this.props.review._id);
        this.toggle();
    };

    getModalHeader = modalType => {
        if (modalType === "delete") {
            return "Deleting Selected Item";
        }
    };

    getModalBody = modalType => {
        if (modalType === "delete") {
            return "Are you sure you want to delete?";
        } else {
        }
    };

    getModalFooter = modalType => {
        if (modalType === "delete") {
            return (
                <Fragment>
                    <Button color="secondary" onClick={this.toggle}>
                        Cancel
                    </Button>
                    <Button color="danger" onClick={this.deleteReview}>
                        Delete
                    </Button>
                </Fragment>
            );
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
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        {modalHeader}
                    </ModalHeader>
                    <ModalBody>{modalBody}</ModalBody>
                    <ModalFooter>{modalFooter}</ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ReviewModal;
