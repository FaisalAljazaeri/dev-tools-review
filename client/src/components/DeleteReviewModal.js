import React, { Component } from "react";
import { Modal, ModalHeader, ModalFooter, Button, ModalBody } from "reactstrap";

class DeleteReviewModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    deleteReview = () => {
        this.props.deleteReview();
        this.toggle();
    };

    render() {
        return (
            <div>
                <i className="fa fa-trash fa-lg red" onClick={this.toggle} />

                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Delete Review
                    </ModalHeader>
                    <ModalBody>Are you sure you want to delete?</ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.deleteReview}>
                            Delete
                        </Button>
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default DeleteReviewModal;
