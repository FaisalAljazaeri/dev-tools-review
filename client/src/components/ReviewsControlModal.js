import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import AddReviewForm from "./AddReviewForm";

function ReviewsControlModal(props) {
    const addReview = review => {
        props.addReview(review);
    };

    const modalBody =
        props.modalBody === "add" ? (
            <AddReviewForm
                createReview={addReview}
                toggleAll={props.toggleAll}
            />
        ) : (
            undefined
        );

    return (
        <Modal
            isOpen={props.nestedModal}
            toggle={props.toggleNested}
            onClosed={props.closeAll ? props.toggle : undefined}
        >
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>{modalBody}</ModalBody>
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
