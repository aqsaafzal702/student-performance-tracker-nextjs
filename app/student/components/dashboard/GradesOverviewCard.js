// app/components/dashboard/GradesOverviewCard.js
import React from 'react';

const GradesOverviewCard = ({ currentGrades, overallGPA }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 animate-slide-in"
      style={{ animationDelay: "0.2s" }}
    >
      <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Current Grades
      </h2>
      <div className="space-y-2 mt-3">
        {currentGrades && currentGrades.length > 0 ? (
          currentGrades.map((grade, index) => (
            <div key={index} className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700">
                {grade.subject}
              </span>
              <span className="text-sm font-bold text-blue-600">
                {grade.grade}
              </span>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500">No grades available.</p>
        )}
        
        <div className="pt-2 text-center">
          <span className="text-sm font-medium text-slate-500">
            Overall GPA
          </span>
          <div className="text-xl font-bold text-indigo-600">{overallGPA}</div>
        </div>
      </div>
    </div>
  );
};

export default GradesOverviewCard;