const router = require('express').Router();
const { User } = require('../models/user');
// const Joi = require('joi');

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        console.log(req.body.email);
        console.log(req.body.password);
        // console.log("error for the validation is ", error.details[0].message)

        // Check if validation error exists
        if (error) {
            console.log("error for the validation is ", error.email || error.password);
            return res.status(400).send({ message: error.email || error.password });
        }

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).send({ message: "Invalid email or password" });
        }

        // const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (user && req.body.password !== user.password) {
            res.status(401).send({ message: "Invalid email or password" });
        }

        const token = user.generateAuthToken();
        res.status(201).send({ data: token, message: "Logged in successfuly..." });

    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

// const validate = (data) =>{
//     const schema = Joi.object({
//         email:Joi.string().email().required().label("Email"),
//         password: Joi.string().email().required().label("Password")
//     })
//     return schema.validate(data);
// }

const validate = (data) => {
    const errors = {};

    // Email validation
    if (!data.email || typeof data.email !== 'string') {
        errors.email = "Email is required and should be a string.";
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(data.email)) {
            errors.email = "Email is not valid.";
        }
    }

    // Password validation
    if (!data.password || typeof data.password !== 'string') {
        errors.password = "Password is required and should be a string.";
    } else {
        // Example password complexity check
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordPattern.test(data.password)) {
            errors.password = "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one digit.";
        }
    }

    return {
        error: Object.keys(errors).length > 0 ? errors : null,
        value: data
    };
};

module.exports = router;
