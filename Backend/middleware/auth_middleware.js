import zod from 'zod';
import User from '../Db/Schema/User.Schema.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import BlackListToken from '../Db/Schema/BlackListToken.Schema.js';

dotenv.config();

// Define validation schema
const signupSchema = zod.object({
    FirstName: zod.string().min(3, "First Name must be at least 3 characters long"),
    LastName: zod.string().min(3, "Last Name must be at least 3 characters long"),
    email: zod.string().email("Invalid email format"),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
});

// Middleware to validate user input
export async function UserInputValidation(req, res, next) {
    try {
        // Validate input fields
        const result = signupSchema.safeParse(req.body);
        if (!result.success) {
            const errors = result.error.errors.map(error => ({
                field: error.path[0],
                message: error.message
            }));
            return res.status(400).json({ errors });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        next();
    } catch (error) {
        console.error("Error in UserInputValidation:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// Token verification middleware
export const verifyToken = async (req, res, next) => {
    try {
        // Ensure cookie-parser middleware is used in your app
        if (!req.cookies) {
            console.warn("req.cookies is undefined. Ensure cookie-parser middleware is applied.");
        }

        // Extract token from cookies or authorization header
        const token = req.cookies?.token || (req.headers.authorization?.startsWith("Bearer ") ? req.headers.authorization.split(" ")[1] : null);

        if (!token) {
            return res.status(401).json({ message: "Authorization token required" });
        }

        const blackListedToken = await BlackListToken.findOne({ token: token });
        if (blackListedToken) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded._id;

        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
