import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class EditReviewForm extends Component {
    constructor(props) {
        super(props);

        const { itemName, content, itemImgSrc } = this.props.review;

        this.state = {
            itemName,
            content,
            itemImgSrc
        };
    }

    changehandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitHandler = e => {
        e.preventDefault();
        this.props.editReview({ ...this.state, _id: this.props.review._id });
    };

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <FormGroup>
                    <Label>Item Name</Label>
                    <Input
                        type="text"
                        name="itemName"
                        placeholder="item name"
                        onChange={this.changehandler}
                        value={this.state.itemName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Review Content</Label>
                    <Input
                        type="textarea"
                        name="content"
                        placeholder="Review Content"
                        onChange={this.changehandler}
                        value={this.state.content}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Image Src</Label>
                    <Input
                        type="text"
                        name="itemImgSrc"
                        placeholder="Image Src"
                        onChange={this.changehandler}
                        value={this.state.itemImgSrc}
                    />
                </FormGroup>
                <Button type="submit" color="primary">
                    Submit
                </Button>{" "}
                <Button color="secondary" onClick={this.props.closeModal}>
                    Cancel
                </Button>
            </Form>
        );
    }
}

export default EditReviewForm;
