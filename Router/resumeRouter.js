import express from "express";
const router = express.Router();
import {getAllData} from "../Controller/resumeController.js"

router.get("/", getAllData)

export {router};