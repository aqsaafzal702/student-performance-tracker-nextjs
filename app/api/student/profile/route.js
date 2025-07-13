// app/api/student/profile/route.js

import connectMongoDB from "@/lib/mongodb";
import Student from "@/models/Student";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectMongoDB();

    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "No token provided" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
    }

    const userId = decoded.userId;

    const student = await Student.findOne({ userId });
    if (!student) {
      return NextResponse.json({ message: "Student profile not found." }, { status: 404 });
    }

    return NextResponse.json({ student }, { status: 200 });

  } catch (error) {
    console.error("Error fetching student profile:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
