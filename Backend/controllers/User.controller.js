import User from "../Db/Schema/User.Schema.js";
import BlackListToken from "../Db/Schema/BlackListToken.Schema.js";

// User sign up controller
export const User_Sin_in = async (req, res, next) => {
    try {
        const { FirstName, LastName, email, password } = req.body;
        const hashPassword = await User.hashPassword(password);

        const user = await User.create({
            FirstName,
            LastName,
            email,
            password: hashPassword,
        });

        const token = await user.generateAuthToken();

        // Set cookie with secure options
        res.cookie('token', token);

        // Remove sensitive data before sending response
        const userResponse = {
            _id: user._id,
            FirstName: user.FirstName,
            LastName: user.LastName,
            email: user.email
        };

        res.status(201).json({
            message: "User created successfully",
            user: userResponse
        });
        next();
    } catch (error) {
        console.error("Error in User_Sin_in:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// User login controller
export const User_Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email }).select('+password');
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const token = user.generateAuthToken(user._id);

        // Set cookie with secure options
        res.cookie('token', token);


        // Remove sensitive data before sending response
        const userResponse = {
            _id: user._id,
            FirstName: user.FirstName,
            LastName: user.LastName,
            email: user.email,
            token: token
        };

        res.status(200).json({
            message: "User logged in successfully",
            user: userResponse
        });
    } catch (error) {
        console.error("Error in User_Login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// get all users
export const all_User = async (req, res) => {
    const user = await User.find()
    return res.json({ user: user })
}

// Logout user
export const User_Logout = async (req, res) => {
    try {
        res.clearCookie('token');
        const token = req.cookies.token || req.headers.authorization.split(" ")[1];
        await BlackListToken.create({ token: token });

        res.status(200).json({ message: "Logged out successfully" });

    } catch (error) {

        console.error("Error in User_Logout:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}