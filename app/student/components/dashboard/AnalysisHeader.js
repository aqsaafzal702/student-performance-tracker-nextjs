// app/components/dashboard/AnalysisHeader.js
import React from "react";
import Link from "next/link";

const AnalysisHeader = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Student Analysis</h1>{" "}
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
  );
};

export default AnalysisHeader;
