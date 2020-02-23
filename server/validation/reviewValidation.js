const joi = require("@hapi/joi");

// Define Review validation schema
const validationSchema = joi.object({
    itemName: joi
        .string()
        .min(6)
        .required(),

    isRecommended: joi.bool().required()
});

// Function to validate review data passed in parameter.
// It's called when a POST request is made.
const validateReview = review => {
    // Vlidate the recived review against the defined schema
    const { error } = validationSchema.validate(review, {
        abortEarly: false
    });

    // If validation errors were found, return all error messages
    if (error) {
        const errorMessages = error.details.map(err => err.message);
        return errorMessages;
    } else {
        return [];
    }
};

module.exports = validateReview;
