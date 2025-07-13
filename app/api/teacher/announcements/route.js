// app/api/teacher/announcements/route.js
import connectDB from "@/lib/mongodb";
import Announcement from "@/models/Announcement";

export async function GET() {
  await connectDB();
  const announcements = await Announcement.find().sort({ createdAt: -1 });
  return Response.json({ announcements });
}
export async function POST(req) {
  await connectDB();
  const { title, message } = await req.json();
  const newAnnouncement = await Announcement.create({ title, message });
  return Response.json(newAnnouncement);
}
