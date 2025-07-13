// app/components/dashboard/MonthlyAttendanceBarChart.js
import React from 'react';

const MonthlyAttendanceBarChart = ({ attendanceData }) => {
  const maxAttendance = 100; 
  const totalPercentage = attendanceData.reduce((acc, curr) => acc + curr.percentage, 0);
  const averageAttendance = attendanceData.length > 0 ? (totalPercentage / attendanceData.length).toFixed(1) : 'N/A';

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 animate-slideIn"
      style={{ animationDelay: '0.6s' }}
    >
      <h2 className="text-xl font-bold text-slate-800 mb-6">Monthly Attendance</h2>
      <div className="flex items-end h-64 space-x-2 border-b border-gray-200 pb-2">
        {attendanceData && attendanceData.length > 0 ? (
          attendanceData.map((monthData, index) => (
            <div key={index} className="flex flex-col items-center flex-grow">
              <div
                className="bg-blue-500 w-full rounded-t-lg animate-fadeIn"
                // Ensure height is responsive to data, cap at 100%
                style={{ height: `${(monthData.percentage / maxAttendance) * 100}%`, animationDelay: `${0.7 + index * 0.1}s` }}
              ></div>
              <span className="text-xs mt-2 text-slate-600">{monthData.month}</span>
            </div>
          ))
        ) : (
          <p className="text-center text-slate-500 w-full">No monthly attendance data available.</p>
        )}
      </div>
      {attendanceData && attendanceData.length > 0 && (
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-slate-600">Attendance Rate</span>
          </div>
          <div className="text-sm font-medium text-slate-800">Avg: {averageAttendance}%</div>
        </div>
      )}
    </div>
  );
};

export default MonthlyAttendanceBarChart;