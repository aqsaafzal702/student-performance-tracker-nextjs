// app/student/profile/page.js
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProfileHeader from "@/app/student/components/dashboard/ProfileHeader";
import PersonalDetailsCard from "@/app/student/components/dashboard/PersonalDetailsCard";
import GradesOverviewCard from "@/app/student/components/dashboard/GradesOverviewCard";
import AchievementsCard from "@/app/student/components/dashboard/AchievementsCard";

const LoadingSpinner = () => (
  <div className="text-center p-8">Loading student profile...</div>
);
const ErrorMessage = ({ message }) => (
  <div className="text-center p-8 text-red-500">
    Error: {message}. Please try again later.
  </div>
);
const NoDataMessage = ({ message }) => (
  <div className="text-center p-8 text-gray-500">{message}</div>
);

const StudentProfilePage = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchStudentProfile = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const response = await fetch("/api/student/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const result = await response.json();
      setStudentData(result.student);
    } catch (err) {
      console.error("Failed to fetch student profile:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchStudentProfile();
}, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!studentData) {
    return <NoDataMessage message="No student profile found for this user." />;
  }

  const {
    firstName = "",
    lastName = "",
    _id: studentId = "",
    gradeLevel = "",
    section = "",
    contactEmail = "",
    strengthsAndInterests = [],
    overallGPA = 0.0,
    currentGrades = [],
    achievements = [],
  } = studentData;

  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header with back button */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 shadow-md fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Student Profile</h1>{" "}
          <div className="flex space-x-4">
            <Link
              href="/student" 
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300 flex items-center"
            >
              <span className="mr-2">←</span> Back To Dashboard
            </Link>
          </div>
        </div>
      </header>
      {/* Main content */}
      <main className="container mx-auto pt-24 pb-12 px-4">
        {/* Student Overview Card */}
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="md:flex">
            <ProfileHeader
              firstName={firstName}
              lastName={lastName}
              studentId={studentId}
              gradeLevel={gradeLevel}
              section={section}
            />
            <PersonalDetailsCard
              fullName={fullName}
              email={contactEmail}
              strengthsAndInterests={strengthsAndInterests}
            />
          </div>
        </div>
        {/* Academic Performance & Attendance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GradesOverviewCard
            currentGrades={currentGrades}
            overallGPA={overallGPA}
          />
          <AchievementsCard achievements={achievements} />
        </div>
      </main>
    </div>
  );
};

export default StudentProfilePage;
