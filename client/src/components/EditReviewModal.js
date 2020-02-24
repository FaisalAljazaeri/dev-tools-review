import React, { Component } from "react";
import { Modal, Button, ModalHeader, ModalBody } from "reactstrap";

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

    createReview = review => {
        this.toggle();
        // this.props.addReview(review);
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
                        {/* <AddReviewForm
                            closeModal={this.toggle}
                            createReview={this.createReview}
                        /> */}
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AddReviewModal;
