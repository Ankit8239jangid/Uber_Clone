import zod from 'zod';
import User from '../Db/Schema/User.Schema.js';

const signupSchema = zod.object({
    FirstName: zod.string().min(3, "First Name must be at least 3 characters long"),
    LastName: zod.string().min(3, "Last Name must be at least 3 characters long"),
    email: zod.string().email("Invalid email format"),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
});

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

        // Check if user already exists (Fix: Added `await`)
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
