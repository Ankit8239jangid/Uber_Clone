import express from 'express';
import { UserInputValidation } from '../controllers/User.auth.js';
import User from '../Db/Schema/User.Schema.js';
const userRouter = express.Router();

userRouter.post('/sign-up', UserInputValidation, async (req, res) => {
    const { FirstName, LastName, email, password } = req.body;
    const hashPassword = await User.hashPassword(password);

    const user = await User.create({
        FirstName,
        LastName,
        email,
        password: hashPassword,
    });

    const token = user.generateAuthToken(user._id);

    res.status(201).json({
        message: "User created successfully",
        user: user,
        token: token
    });

});




export default userRouter;