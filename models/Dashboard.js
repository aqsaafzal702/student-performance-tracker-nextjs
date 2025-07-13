import mongoose from "mongoose";

const DashboardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true },
  course: { type: String, required: true },
  marks: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.models.Dashboard || mongoose.model("Dashboard", DashboardSchema);
