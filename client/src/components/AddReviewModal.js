import React, { Component } from "react";
import {
    Modal,
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

class AddReviewModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen,
            itemName: "",
            content: "",
            itemImgSrc: "",
            isRecommended: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    addItem = e => {
        console.log(e);
        e.preventDefault();
        this.toggle();
    };

    changehandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>
                    Cancel
                </Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add Review For New Item
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.addItem}>
                            <FormGroup>
                                <Label>Item Name</Label>
                                <Input
                                    type="text"
                                    name="itemName"
                                    placeholder="item name"
                                    onChange={this.changehandler}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Review Content</Label>
                                <Input
                                    type="textarea"
                                    name="content"
                                    placeholder="Review Content"
                                    onChange={this.changehandler}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Image Src</Label>
                                <Input
                                    type="text"
                                    name="itemImgSrc"
                                    placeholder="Image Src"
                                    onChange={this.changehandler}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Do You Recommend It?</Label>
                                <Input
                                    type="select"
                                    name="isRecommended"
                                    onChange={this.changehandler}
                                >
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </Input>
                            </FormGroup>

                            <ModalFooter>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>{" "}
                                <Button color="secondary" onClick={this.toggle}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AddReviewModal;
