// app/components/dashboard/SubjectPerformanceProgress.js
import React from 'react';

const SubjectPerformanceProgress = ({ subjectData }) => {
  // Define colors for subjects 
  const subjectColors = {
    Mathematics: 'bg-blue-600',
    Science: 'bg-green-500',
    'Language Arts': 'bg-purple-500',
    'Social Studies': 'bg-amber-500',
    'Computer Science': 'bg-indigo-500',
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 animate-slideIn"
      style={{ animationDelay: '0.5s' }}
    >
      <h2 className="text-xl font-bold text-slate-800 mb-6">Subject Performance</h2>
      {subjectData && subjectData.length > 0 ? (
        subjectData.map((subject, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">{subject.subject}</span>
              <span className="text-sm font-medium text-slate-700">{subject.score}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5">
              <div
                className={`${subjectColors[subject.subject] || 'bg-gray-500'} h-2.5 rounded-full animate-progressFill`}
                style={{ width: `${subject.score}%` }} 
              ></div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-slate-500">No subject performance data available.</p>
      )}
    </div>
  );
};

export default SubjectPerformanceProgress;