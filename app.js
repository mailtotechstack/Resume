import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import {router as resumeRouter} from "./Router/resumeRouter.js";

app.use(express.json());

app.use("/", resumeRouter);

app.use((req, res)=>{
    res.send("404 page not found");
});

app.listen(process.env.PORT, ()=>{
    console.log("Server is listening on Port", process.env.PORT);
});