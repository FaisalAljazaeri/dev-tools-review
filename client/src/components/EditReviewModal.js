import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import EditReviewForm from "./EditReviewForm";

class AddReviewModal extends Component {
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

    editReview = review => {
        this.props.editReview(review);
        this.toggle();
    };

    render() {
        return (
            <div>
                <i
                    className="fa fa-edit fa-lg blue"
                    id="edit-icon"
                    onClick={this.toggle}
                />
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add Review For New Item
                    </ModalHeader>
                    <ModalBody>
                        <EditReviewForm
                            review={this.props.review}
                            editReview={this.editReview}
                            closeModal={this.toggle}
                        />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AddReviewModal;
