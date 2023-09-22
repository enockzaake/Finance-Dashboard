import express  from "express";
import KPI from "../models/KPI.js"

const router = express.Router();

router.get('/kpi',async (req,res)=>{
    try{
        const kpis = await KPI.find();
        res.status(200).json(kpis);
    }
    catch{
        res.status(400).json({"error":error.message})
    }
})

export default router;