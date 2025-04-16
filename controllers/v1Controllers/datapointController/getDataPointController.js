import { DataPoint } from "../../../models/dataPointModel.js";

export const getDataPointController = async(req,res) => {
    try {
        const allDataPoints = await DataPoint.find();
        res.status(201).json(allDataPoints);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
}