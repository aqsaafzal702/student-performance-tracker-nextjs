// app/student/analysis/page.js
"use client";

import React, { useEffect, useState } from "react";
import AnalysisHeader from "@/app/student/components/dashboard/AnalysisHeader";
import AnalyticsSummaryCards from "@/app/student/components/dashboard/AnalyticsSummaryCards";
import SubjectPerformanceProgress from "@/app/student/components/dashboard/SubjectPerformanceProgress";
import MonthlyAttendanceBarChart from "@/app/student/components/dashboard/MonthlyAttendanceBarChart";

const LoadingSpinner = () => (
  <div className="text-center p-8 text-indigo-700 text-lg font-semibold">
    Loading student analysis...
  </div>
);
const ErrorMessage = ({ message }) => (
  <div className="text-center p-8 text-red-600 text-lg font-semibold">
    Error: {message}. Please try again later.
  </div>
);
const NoDataMessage = ({ message }) => (
  <div className="text-center p-8 text-gray-500 text-lg">
    No analysis data found: {message}.
  </div>
);

const StudentAnalysisPage = () => {
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const response = await fetch("/api/student/analysis", {
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

        const data = await response.json();
        setAnalysisData(data);
      } catch (err) {
        console.error("Failed to fetch student analysis data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysisData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  // Handle case where no data is returned after loading
  if (!analysisData) {
    return (
      <NoDataMessage message="Data not available for this student. Please check MongoDB." />
    );
  }

  // Destructure data with default values for safety
  const {
    overallScore = 0,
    overallAvgGrade = "N/A",
    overallAvgAttendance = 0,
    teacherRating = "N/A",
    subjectPerformance = [],
    monthlyAttendanceData = [],
    insightsAndRecommendations = [],
    totalStudents = "N/A",
  } = analysisData;

  return (
    <div className="min-h-screen bg-slate-50">
      <AnalysisHeader />

      <main className="container mx-auto pt-24 pb-12 px-4">
        <AnalyticsSummaryCards
          totalStudents={totalStudents}
          avgAttendance={overallAvgAttendance}
          avgGrade={overallAvgGrade}
          teacherRating={teacherRating}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SubjectPerformanceProgress subjectData={subjectPerformance} />
          <MonthlyAttendanceBarChart attendanceData={monthlyAttendanceData} />
        </div>
      </main>
    </div>
  );
};

export default StudentAnalysisPage;
