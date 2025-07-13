// app/api/student/analysis/route.js

import connectMongoDB from "@/lib/mongodb";
import Student from "@/models/Student";
import PerformanceRecord from "@/models/PerformanceRecords";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    await connectMongoDB();
    console.log("MongoDB connected for student analysis API.");

    // Step 1: Get token from Authorization header
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ message: "No token provided" }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const token = authHeader.split(" ")[1];

    // Step 2: Verify and decode token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return new Response(JSON.stringify({ message: "Invalid or expired token" }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const userId = decoded.userId;

    // Step 3: Find student by userId
    const student = await Student.findOne({ userId });

    if (!student) {
      return new Response(JSON.stringify({ message: "Student profile not found" }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Step 4: Find performance data
    const performanceData = await PerformanceRecord.findOne({ studentId: student._id });

    if (!performanceData) {
      return new Response(JSON.stringify({ message: "Performance data not found" }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(performanceData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error fetching student analysis data:", error);
    return new Response(JSON.stringify({ message: `Internal server error: ${error.message}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
