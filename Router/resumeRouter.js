import express from "express";
const router = express.Router();
import {getAllData, setAllData} from "../Controller/resumeController.js";
import { ResumeValidation } from "../Middlewares/inputValidation.js";

router.get("/", getAllData)
.post("/", ResumeValidation, setAllData);

export {router};