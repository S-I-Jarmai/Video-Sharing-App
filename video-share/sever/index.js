import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./routes/auth.js";
import user from "./routes/user.js";
import video from "./routes/video.js"
import comment from "./routes/comment.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();


const connect = mongoose.connect((process.env.MONGO), ()=>{
    console.log("Database is connected!");
})

 
app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong...";
    return res.status(status).json({
        success:false,
        status,
        message
    })
})
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', auth)
app.use('/api/user', user)
app.use('/api/video', video)
app.use('/api/comment', comment)
app.listen(8800, ()=>{
    console.log("Server is running...");
})