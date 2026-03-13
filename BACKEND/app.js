import express from "express";
const app = express();
import {router as resumeRouter} from "./Router/resumeRouter.js"
app.use(express.json());

app.use("/", resumeRouter);

app.use((req, res)=>{
    res.send("404 page not found");
});

app.listen(3000, ()=>{
    console.log("Server is listening on Port 3000");
});