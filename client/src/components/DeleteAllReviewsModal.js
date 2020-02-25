import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class DeleteAllReviewsModal extends Component {
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

    deleteAllReviews = () => {
        this.props.deleteAllReviews();
        this.toggle();
    };

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>
                    Delete All Reviews
                </Button>

                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalBody>
                        Are you sure you want to delete All reviews?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.deleteAllReviews}>
                            Delete All
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

export default DeleteAllReviewsModal;
