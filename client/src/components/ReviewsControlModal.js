import React, { Fragment } from "react";
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

    const getBodyContent = modalBody => {
        if (modalBody === "add") {
            return (
                <AddReviewForm
                    createReview={addReview}
                    toggleAll={props.toggleAll}
                />
            );
        } else if (modalBody === "deleteAll") {
            return (
                <Fragment>
                    are you sure you want to delete all items?
                    <Button color="danger" onClick={deleteAllReviews}>
                        Confirm
                    </Button>
                </Fragment>
            );
        }
    };

    const bodyContent = getBodyContent(props.modalBody);

    return (
        <Modal
            isOpen={props.nestedModal}
            toggle={props.toggleNested}
            onClosed={props.closeAll ? props.toggle : undefined}
        >
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>{bodyContent}</ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={props.toggleNested}>
                    Done
                </Button>{" "}
                <Button color="secondary" onClick={props.toggleAll}>
                    All Done
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ReviewsControlModal;
