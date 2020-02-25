import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class DeleteNotRecommendedReviewsModal extends Component {
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

    deleteNotRecommendedReviews = () => {
        this.props.deleteNotRecommendedReviews();
        this.toggle();
    };

    render() {
        return (
            <div>
                <Button color="secondary" onClick={this.toggle}>
                    Delete Not Recommended Reviews
                </Button>

                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalBody>
                        Are you sure you want to delete All reviews?
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="danger"
                            onClick={this.deleteNotRecommendedReviews}
                        >
                            Delete Not Recommended Reviews
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

export default DeleteNotRecommendedReviewsModal;
