// app/components/dashboard/ProfileHeader.js
import React from 'react';
import Link from 'next/link'; 

const ProfileHeader = ({ firstName, lastName, studentId, gradeLevel, section }) => {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 md:w-1/3 flex flex-col justify-center items-center">
      <div className="w-32 h-32 rounded-full bg-white p-1 mb-4">
        <div className="w-full h-full rounded-full bg-indigo-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-white text-2xl font-bold mb-1">
        {firstName} {lastName}
      </h2>
      <p className="text-indigo-100 mb-3">Student ID: {studentId}</p>
      <div className="flex space-x-2">
        <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
          Grade {gradeLevel}
        </span>
        <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
          Section {section}
        </span>
      </div>
    </div>
  );
};

export default ProfileHeader;