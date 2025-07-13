// app/api/teacher/announcements/[id]/route.js

import connectDB from "@/lib/mongodb";
import Announcement from "@/models/Announcement";

export async function DELETE(request, { params }) {
  await connectDB();
  const { id } = params;

  try {
    await Announcement.findByIdAndDelete(id);
    return Response.json({ message: "Announcement deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return new Response("Failed to delete announcement", { status: 500 });
  }
}
