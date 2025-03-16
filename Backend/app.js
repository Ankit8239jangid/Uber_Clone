import express from "express"
const app = express();
import dotenv from 'dotenv'
import userRouter from './router/user.router.js';
import { connectDb } from "./Db/index.js";

dotenv.config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all the root routers
app.use('/api/v1/user', userRouter);




const PORT = process.env.PORT
app.get('/', (_, res) => {
    res.send('WELLCOM TO SBCRIPTION TRACKER API 😀')
})



app.listen(PORT, async () => {
    console.log(`server is running on => http://localhost:${PORT}`)
    await connectDb()
})

