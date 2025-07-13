// models/Student.js
import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    userId: { // This links to the User model
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true, // A user has only one student profile
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    contactEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },
    contactPhone: {
      type: String,
      trim: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },
    gradeLevel: {
      type: String, // e.g., "10th Grade", "Sophomore"
      trim: true,
    },
    // --- START: New fields added for profile display ---
    section: {
      type: String, // e.g., "A", "B", "Morning"
      trim: true,
      default: '' // Default to empty string if not provided
    },
    strengthsAndInterests: {
      type: [String], // Array of strings (e.g., ["Coding", "Football", "Reading"])
      default: [] // Default to an empty array
    },
    overallGPA: {
      type: Number, // Numeric value for GPA
      default: 0.0
    },
    currentGrades: [ // Array of objects for individual subject grades
      {
        subject: { type: String, required: true },
        grade: { type: String, required: true }, // e.g., "A+", "B", "Pass"
        // You can add more fields like 'teacher', 'semester', 'score' here if needed
      }
    ],
    achievements: [ // Array of objects for achievements/awards
      {
        title: { type: String, required: true }, // e.g., "Science Fair Winner", "Honor Roll"
        description: String,
        date: Date, // Date when the achievement was awarded
        // You can add more fields like 'awardingBody' here
      }
    ],
    // --- END: New fields added ---
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;