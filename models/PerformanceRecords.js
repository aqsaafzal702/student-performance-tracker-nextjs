// models/PerformanceRecord.js
import mongoose, { Schema } from "mongoose";

const performanceRecordSchema = new Schema(
  {
    studentId: { // This links to the Student model
      type: Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
      unique: true, // One performance record per student
    },
    overallScore: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    overallAvgGrade: {
      type: String, // e.g., "A+", "B"
      trim: true,
    },
    overallAvgAttendance: {
      type: Number, // Percentage, e.g., 95.5
      min: 0,
      max: 100,
      default: 0,
    },
    teacherRating: {
      type: String, // e.g., "4.5/5"
      trim: true,
    },
    subjectPerformance: [
      {
        subject: { type: String, trim: true },
        score: { type: Number, min: 0, max: 100 },
        grade: { type: String, trim: true } // e.g., "A", "B+"
      }
    ],
    monthlyAttendanceData: [
      {
        month: { type: String, trim: true }, // e.g., "Jan", "Feb"
        present: { type: Number, min: 0 },
        absent: { type: Number, min: 0 },
        totalClasses: { type: Number, min: 0 },
        percentage: { type: Number, min: 0, max: 100 } // Calculated field or stored
      }
    ],
    insightsAndRecommendations: [
      { type: String, trim: true }
    ],
    totalStudents: { type: Number, default: 0 }, // If this is a global count, you might fetch it differently
  },
  {
    timestamps: true,
  }
);

const PerformanceRecord = mongoose.models.PerformanceRecord || mongoose.model("PerformanceRecord", performanceRecordSchema);

export default PerformanceRecord;