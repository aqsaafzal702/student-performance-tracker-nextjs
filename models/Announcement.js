import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
  { timestamps: true } // important!
);

export default mongoose.models.Announcement || mongoose.model("Announcement", announcementSchema);
