import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./router/user.router.js";
import captainRouter from "./router/Captain.router.js";
import { connectDb } from "./Db/index.js";

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors({
    origin: 'https://uber-by-ankit.vercel.app', // Allow requests from your frontend
    credentials: true, // Allow cookies & authorization headers
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Root routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/captain", captainRouter);

const PORT = process.env.PORT || 4000; // ✅ Use default port if undefined

app.get("/", (_, res) => {
    res.send("WELCOME TO SUBSCRIPTION TRACKER API 😀");
});

// ✅ Ensure DB connection before starting the server
connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on => http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Database connection failed:", err);
        process.exit(1); // Exit process if DB connection fails
    });
