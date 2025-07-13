import connectDB from '@/lib/mongodb';
import Dashboard from '@/models/Dashboard';

// GET all students
export async function GET() {
  await connectDB();
  const students = await Dashboard.find().sort({ createdAt: -1 });
  return Response.json({ students });
}

// POST (create new student)
export async function POST(req) {
  await connectDB();
  const { name, rollNo, course, marks } = await req.json();

  try {
    const newStudent = await Dashboard.create({ name, rollNo, course, marks });
    return Response.json({ student: newStudent });
  } catch (error) {
    console.error("POST error:", error);
    return new Response("Failed to save student", { status: 500 });
  }
}

// PUT (update student)
export async function PUT(req) {
  await connectDB();
  const { id, name, rollNo, course, marks } = await req.json();

  try {
    const updated = await Dashboard.findByIdAndUpdate(
      id,
      { name, rollNo, course, marks },
      { new: true }
    );
    return Response.json({ student: updated });
  } catch (error) {
    console.error("PUT error:", error);
    return new Response("Failed to update student", { status: 500 });
  }
}

// DELETE student
export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();

  try {
    await Dashboard.findByIdAndDelete(id);
    return new Response("Student deleted successfully", { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return new Response("Failed to delete student", { status: 500 });
  }
}
