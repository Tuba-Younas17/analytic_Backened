// models/dataCollectionTemplateModel.js
import mongoose from "mongoose";

const dataCollectionTemplateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dataPoints: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DataPoint",
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export const DataCollectionTemplate = mongoose.model(
  "DataCollectionTemplate",
  dataCollectionTemplateSchema
);
