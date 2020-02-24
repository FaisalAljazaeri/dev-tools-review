const router = require("express").Router();
const Review = require("../models/Review");
const mongoose = require("mongoose");
const validateReview = require("../validation/reviewValidation");

router.post("/", async (req, res) => {
    // validate submitted data before adding a new review
    const errorMessages = validateReview(req.body);
    if (errorMessages.length > 0) {
        return res.status(400).send({
            messages: errorMessages
        });
    }

    // Create a new review object based on the recieved data
    const review = new Review({
        itemName: req.body.itemName,
        content: req.body.content,
        itemImgSrc: req.body.itemImgSrc,
        isRecommended: req.body.isRecommended,
        lastUpdated: new Date()
    });

    // Try to save the new review to the Database
    try {
        await review.save();
        res.status(200).send({ review: review });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get("/", async (req, res) => {
    // Find all reviews in the Database and send them in response
    Review.find({}, (err, reviews) => {
        res.status(200).send(reviews);
    });
});

router.patch("/:reviewId", (req, res) => {
    Review.findById(req.body.reviewId, async (err, review) => {
        review.isRecommended = !review.isRecommended;

        // Try to save the new review to the Database
        try {
            await review.save();
            res.status(200).send({ review: review });
        } catch (err) {
            res.status(400).send(err);
        }
    });
});

router.delete("/:reviewId", (req, res) => {
    Review.findByIdAndDelete(req.params.reviewId, (err, review) => {
        if (err) {
            return res.status(400).send(err);
        }

        return res.status(200).send(review._id);
    });
});

module.exports = router;
