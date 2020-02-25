import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import AddReviewForm from "./AddReviewForm";

function ReviewsControlModal(props) {
    const addReview = review => {
        props.addReview(review);
    };

    const deleteAllReviews = () => {
        props.deleteAllReviews();
        props.toggleAll();
    };

    const deleteNotRecommendedReviews = () => {
        props.deleteNotRecommendedReviews();
        props.toggleAll();
    };

    const getBodyContent = modalType => {
        if (modalType === "add") {
            return (
                <AddReviewForm
                    createReview={addReview}
                    toggleAll={props.toggleAll}
                />
            );
        } else if (modalType === "deleteAll") {
            return <div>are you sure you want to delete all items?</div>;
        } else {
            return (
                <div>
                    are you sure you want to delete not recommended items?
                </div>
            );
        }
    };

    const getFooterContent = modalType => {
        if (modalType === "deleteNotRecommended") {
            return (
                <Button color="danger" onClick={deleteNotRecommendedReviews}>
                    Confirm
                </Button>
            );
        } else if (modalType === "deleteAll") {
            return (
                <Button color="danger" onClick={deleteAllReviews}>
                    Confirm
                </Button>
            );
        } else {
            return "";
        }
    };

    const bodyContent = getBodyContent(props.modalType);
    const footerContent = getFooterContent(props.modalType);

    return (
        <Modal
            isOpen={props.nestedModal}
            toggle={props.toggleNested}
            onClosed={props.closeAll ? props.toggle : undefined}
        >
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>{bodyContent}</ModalBody>
            <ModalFooter>
                {footerContent}{" "}
                <Button color="secondary" onClick={props.toggleNested}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ReviewsControlModal;
