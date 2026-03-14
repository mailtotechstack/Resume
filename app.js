import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Connection/dbConnect.js";
import {router as resumeRouter} from "./Router/resumeRouter.js";

// Enviroment variable load
dotenv.config();

const app = express();
const PORT = process.env.PORT


// Standard Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", resumeRouter);

// 404 Handler
app.use((req, res) => {
    res.status(404).send("404 Page Not Found");
});

// Global Error Handler (Add this for safety)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Database Connection & Server Startup
connectDB(process.env.MONGODB_URI).then(()=>{
    app.listen(PORT, ()=>{
    console.log("Server is listening on Port", PORT);
});
}).catch((err)=>{
    console.log("MongoDB connection failed!", err)
})