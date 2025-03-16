import {mongoose} from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()


export const connectDb = async () => {
    try {
        const Db = await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log(`Database connected 😀`);
    } catch (error) {
        console.log('Database connection failed');
        console.error(error);
    }
}

