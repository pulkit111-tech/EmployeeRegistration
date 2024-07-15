const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
// const Joi = require('joi');
const PasswordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTSECRETKEY, { expiresIn: "7D" });
    return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const errors = {};

    if (!data.firstName || typeof data.firstName !== 'string') {
        errors.firstName = "First Name is required and should be a string.";
    }

    if (!data.lastName || typeof data.lastName !== 'string') {
        errors.lastName = "Last Name is required and should be a string.";
    }

    if (!data.email || typeof data.email !== 'string') {
        errors.email = "Email is required and should be a string.";
    }

    if (!data.password || typeof data.password !== 'string') {
        errors.password = "Password is required and should be a string.";
    }
    // } else {
    //     const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    //     if (!passwordPattern.test(data.password)) {
    //         errors.password = "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one digit.";
    //     }
    // }

    if (!data.confirmPassword || typeof data.confirmPassword !== 'string') {
        errors.confirmPassword = "Confirm Password is required and should be a string.";
    } else if (data.password !== data.confirmPassword) {
        errors.confirmPassword = "Password and Confirm Password must match.";
    }

    return {
        error: Object.keys(errors).length > 0 ? errors : null,
        value: data
    };
};

module.exports = { User, validate };