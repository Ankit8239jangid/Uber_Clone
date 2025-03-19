import captainModel from "../Db/Schema/captainSchema.js";
import zod from "zod";
import jwt from "jsonwebtoken";
import BlackListToken from "../Db/Schema/BlackListToken.Schema.js";

// Schema for captain creation
const createCaptainSchema = zod.object({

    firstname: zod.string().min(3, "Firstname must be at least 3 characters long"),
    lastname: zod.string().min(3, "Lastname must be at least 3 characters long"),
    email: zod.string().email("Invalid email format"),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
    vehicle: zod.object({
        color: zod.string().min(3, "Color must be at least 3 characters long"),
        plate: zod.string().min(3, "Plate must be at least 3 characters long"),
        capacity: zod.string().min(1, "Capacity must be at least 1"),
        vehicleType: zod.enum(["car", "motorcycle", "auto"])
    }),
    location: zod.string().optional()
});


// Schema for captain login
const loginCaptainSchema = zod.object({
    email: zod.string().email("Invalid email format"),
    password: zod.string().min(6, "Password must be at least 6 characters long")
});


// Validation middleware for captain creation
export const createCaptainValidation = async (req, res, next) => {
    try {
        const result = createCaptainSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                errors: result.error.errors.map(error => ({
                    field: error.path.join('.'),
                    message: error.message
                }))
            });
        }

        const existingCaptain = await captainModel.findOne({ email: req.body.email });
        if (existingCaptain) {
            return res.status(400).json({ message: "Captain already exists" });
        }

        const hashedPassword = await captainModel.hashPassword(req.body.password);
        req.body.password = hashedPassword;
        next();
    } catch (error) {
        console.error("Error in createCaptainValidation:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// Validation middleware for captain login
export const loginCaptainValidation = async (req, res, next) => {
    try {
        const result = loginCaptainSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                errors: result.error.errors.map(error => ({
                    field: error.path.join('.'),
                    message: error.message
                }))
            });
        }
        next();
    } catch (error) {
        console.error("Error in loginCaptainValidation:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// Token verification middleware for captains
export const verifyCaptainToken = async (req, res, next) => {
    try {
        // Extract token from cookies or authorization header
        const token = req.cookies?.token ||
            (req.headers.authorization?.startsWith("Bearer ") ?
                req.headers.authorization.split(" ")[1] : null);

        if (!token) {
            return res.status(401).json({ message: "Authorization token required" });
        }

        // Check if token is blacklisted
        const blackListedToken = await BlackListToken.findOne({ token });
        if (blackListedToken) {
            return res.status(401).json({ message: "Unauthorized - Token revoked" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the user exists and is a captain
        const captain = await captainModel.findById(decoded._id);
        if (!captain) {
            return res.status(401).json({ message: "Unauthorized - Invalid captain" });
        }

        req.user = decoded._id;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}


