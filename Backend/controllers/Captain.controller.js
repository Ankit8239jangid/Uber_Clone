import captainModel from "../Db/Schema/captainSchema.js";
import BlackListToken from "../Db/Schema/BlackListToken.Schema.js";

export const createCaptain = async (req, res) => {
    try {
        const captain = await captainModel.create(req.body);
        const token = captain.generateAuthToken();

        // Set cookie with secure options
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        // Remove sensitive information before sending response
        const captainResponse = {
            _id: captain._id,
            firstname: captain.firstname,
            email: captain.email,
            status: captain.status,
            vehicle: captain.vehicle,
            location: captain.location
        };

        res.status(201).json({
            message: "Captain created successfully",
            captain: captainResponse,
            token: token
        });
    } catch (error) {
        console.error("Error in createCaptain:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}



export const loginCaptain = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find captain and include password for verification
        const captain = await captainModel.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Verify password
        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate token
        const token = captain.generateAuthToken();

        // Set cookie with secure options
        res.cookie('token', token);

        // Remove sensitive information before sending response
        const captainResponse = {
            _id: captain._id,
            firstname: captain.firstname,
            email: captain.email,
            status: captain.status,
            vehicle: captain.vehicle,
            location: captain.location,
            token: token
        };


        res.status(200).json({
            message: " captain Login successful",
            captain: captainResponse
        });
    } catch (error) {
        console.error("Error in loginCaptain:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const logoutCaptain = async (req, res) => {
    try {
        // Get token from cookie or authorization header
        const token = req.cookies?.token ||
            (req.headers.authorization?.startsWith("Bearer ") ?
                req.headers.authorization.split(" ")[1] : null);

        if (!token) {
            return res.status(400).json({ message: "No token provided" });
        }

        // Add token to blacklist
        await BlackListToken.create({ token });

        // Clear cookie
        res.clearCookie('token');

        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Error in logoutCaptain:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getCaptainProfile = async (req, res) => {
    try {
        const captain = await captainModel.findById(req.user);
        if (!captain) {
            return res.status(404).json({ message: "Captain not found" });
        }

        res.status(200).json({
            message: "Captain profile retrieved successfully",
            captain: {
                _id: captain._id,
                fullname: captain.fullname,
                email: captain.email,
                status: captain.status,
                vehicle: captain.vehicle,
                location: captain.location
            }
        });
    } catch (error) {
        console.error("Error in getCaptainProfile:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


