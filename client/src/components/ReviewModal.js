import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import EditReviewForm from "./EditReviewForm";
import axios from "axios";

class ReviewModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            modalType: "",
            githubReposCount: 0
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

    toggleGithub = () => {
        this.setState({
            modalType: "github"
        });

        this.toggle();
    };

    deleteReview = e => {
        this.props.deleteReview(this.props.review._id);
        this.toggle();
    };

    editReview = review => {
        this.props.editReview(review);
        this.toggle();
    };

    getModalHeader = modalType => {
        if (modalType === "delete") {
            return "Deleting Selected Item";
        } else if (modalType === "edit") {
            return "Editing Selected Review";
        } else if (modalType === "github") {
            return "Github Stats";
        } else {
            return "";
        }
    };

    getModalBody = modalType => {
        if (modalType === "delete") {
            return "Are you sure you want to delete?";
        } else if (modalType === "edit") {
            return (
                <EditReviewForm
                    review={this.props.review}
                    editReview={this.editReview}
                />
            );
        } else if (modalType === "github") {
            return `Total Repositories on Github for ${this.props.review.itemName} is ${this.state.githubReposCount}`;
        } else {
            return "";
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
                <i className="fa fa-github fa-lg" onClick={this.toggleGithub} />
                <i
                    className="fa fa-trash fa-lg red"
                    onClick={this.toggleDelete}
                />
                <i
                    className="fa fa-edit fa-lg blue"
                    id="edit-icon"
                    onClick={this.toggleEdit}
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

    componentDidMount() {
        axios
            .get(
                `https://api.github.com/search/repositories?q=${this.props.review.itemName}`
            )
            .then(res =>
                this.setState({
                    githubReposCount: res.data.total_count
                })
            )
            .catch(err => console.log(err));
    }
}

export default ReviewModal;
