import express from 'express';
import { UserInputValidation, verifyToken } from '../middleware/auth_middleware.js';
import { all_User, User_Login, User_Sin_in, User_Logout } from '../controllers/User.controller.js';
const userRouter = express.Router();

// route to create new user
userRouter.post('/sign-up', UserInputValidation, User_Sin_in);

// route to login user
userRouter.post('/login', User_Login);

// route to logout user
userRouter.post('/logout', User_Logout);

//router to get all user
userRouter.get('/allUser', verifyToken, all_User);
    
export default userRouter;