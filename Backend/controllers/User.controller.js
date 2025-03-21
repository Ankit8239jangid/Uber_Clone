import User from "../Db/Schema/User.Schema.js";
import BlackListToken from "../Db/Schema/BlackListToken.Schema.js";

// ✅ Fix: Remove `next()` after response
export const User_Sin_in = async (req, res) => {
    try {
        const { FirstName, LastName, email, password } = req.body;

        // ✅ Fix: Hash password before saving
        const hashPassword = await User.hashPassword(password);

        // ✅ Fix: Ensure unique `sokitId` or remove its index
        const user = await User.create({
            FirstName,
            LastName,
            email,
            password: hashPassword,

        });

        const token = await user.generateAuthToken();

        // ✅ Fix: Secure cookie options
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        const userResponse = {
            _id: user._id,
            FirstName: user.FirstName,
            LastName: user.LastName,
            email: user.email,
            token
        };

        res.status(201).json({
            message: "User created successfully",
            user: userResponse
        });

    } catch (error) {
        console.error("Error in User_Sin_in:", error);
        if (error.code === 11000) {
            return res.status(400).json({ message: "User already exists" });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
};

// ✅ Fix: Improve error handling in `User_Login`
export const User_Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) return res.status(400).json({ message: "Invalid email or password"  });

        const token = user.generateAuthToken();

        // ✅ Fix: Secure cookie options
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

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
        return res.status(500).json({ message: error });
    }
};

// ✅ Fix: Improve error handling in `User_Logout`
export const User_Logout = async (req, res) => {
    try {
        const token = req.cookies.token || (req.headers.authorization ? req.headers.authorization.split(" ")[1] : null);

        if (!token) return res.status(400).json({ message: "No token provided" });

        res.clearCookie("token", {
            httpOnly: true,
            secure: true, // Use `false` if running locally
            sameSite: "None" // Ensure it works across different origins
        });

        await BlackListToken.create({ token });

        return res.status(200).json({ message: "Logged out successfully" });

    } catch (error) {
        console.error("Error in User_Logout:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


// ✅ Fix: Handle errors in `all_User`
export const all_User = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ users });
    } catch (error) {
        console.error("Error in fetching users:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
