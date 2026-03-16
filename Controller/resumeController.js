import mongoose from "mongoose";
import { Resume } from "../Models/Resume";

export const getAllData = async (req, res)=>{
    const data = await Resume.find({});
    if(!data) return res.status(404).json({message: "Data not found"});
    return res.status(200).json(
        {
            message : "Data Fetched Sucessfully",
            data: data
        }
    );
}

export const setAllData = async (req, res)=>{
    const newResume = new Resume(req.body, {new: true});
    newResume.save();
    res.status(200).json({
        message : "Data saved successfully",
    });
};