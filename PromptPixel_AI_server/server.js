import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const app = express();

dotenv.config();

app.use(express.json());

// app.use(cors());
app.use(cors({
  origin: "https://promptpixelai.vercel.app", // ✅ your live frontend URL
  credentials: true
}));

await connectDB();

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    // connectDB();
    console.log(`🚀 Server started on port ${PORT}`);
});




