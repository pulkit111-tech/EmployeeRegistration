const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User, validate } = require('../models/user');

router.post("/", async (req, res) => {
    console.log("Entered the registration statement")
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });
        const user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (user)
            res.status(409).send({ message: "Error occured while registering as user already exists with this mail id" });

        // const salt = await bcrypt.genSalt(Number(process.env.SALT));
        // const hashPassword = await bcrypt.hash(req.body.password.salt);
        // await new User({ ...req.body, password: hashPassword }).save();
        await new User(req.body).save();
        res.status(201).send({ message: "You are now successfully the member of Amdox Tree..." });
        console.log("user you input is ", req.body);

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;

