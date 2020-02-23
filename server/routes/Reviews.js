const router = require("express").Router();
const Review = require("../models/Review");
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
        isRecommended: req.body.isRecommended,
        lastUpdated: new Date()
    });

    // Try to save the new review to the Database
    try {
        const savedReview = await review.save();
        res.status(200).send({ review: savedReview._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
