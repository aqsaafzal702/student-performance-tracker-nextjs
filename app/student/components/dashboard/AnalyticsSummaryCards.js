// app/components/dashboard/AnalyticsSummaryCards.js
import React from 'react';

// Card component to make it reusable
const StatCard = ({ title, value, icon, bgColor, iconColor, changeValue, changePeriod, changeType }) => {
  const changeColor = changeType === 'increase' ? 'text-green-600' : 'text-red-600';
  const arrow = changeType === 'increase' ? '↑' : '↓'; 

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300 animate-fadeIn"
      style={{ animationDelay: '0.1s' }} 
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="text-3xl font-bold text-slate-800 mt-2">{value}</h3>
        </div>
        <div className={`${bgColor} p-3 rounded-lg`}>
          {icon && React.cloneElement(icon, { className: `h-6 w-6 ${iconColor}` })}
        </div>
      </div>
      {changeValue && (
        <p className={`text-sm ${changeColor} mt-4 flex items-center`}>
          <span className="font-medium">{arrow} {changeValue}</span>
          <span className="ml-1 text-slate-500">from {changePeriod}</span>
        </p>
      )}
    </div>
  );
};

const AnalyticsSummaryCards = ({ totalStudents, avgAttendance, avgGrade, teacherRating }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Total Students"
        value={totalStudents}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
        bgColor="bg-blue-100"
        iconColor="text-blue-600"
        changeValue="3.2%"
        changePeriod="last month"
        changeType="increase"
      />
      <StatCard
        title="Avg. Attendance"
        value={`${avgAttendance}%`}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        bgColor="bg-green-100"
        iconColor="text-green-600"
        changeValue="1.8%"
        changePeriod="last month"
        changeType="increase"
      />
      <StatCard
        title="Avg. Grade"
        value={avgGrade}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
        bgColor="bg-amber-100"
        iconColor="text-amber-600"
        changeValue="0.3"
        changePeriod="last semester"
        changeType="increase"
      />
      <StatCard
        title="Teacher Rating"
        value={`${teacherRating}/5`}
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
        bgColor="bg-purple-100"
        iconColor="text-purple-600"
        changeValue="0.2"
        changePeriod="last review"
        changeType="increase"
      />
    </div>
  );
};

export default AnalyticsSummaryCards;