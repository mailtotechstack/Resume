import mongoose from "mongoose";

export const getAllData = async (req, res)=>{
    res.send("get Requested");
}

export const setAllData = async (req, res)=>{
    res.send(req.body);
}