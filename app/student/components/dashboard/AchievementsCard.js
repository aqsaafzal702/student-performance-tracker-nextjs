// app/components/dashboard/AchievementsCard.js
import React from 'react';

const AchievementsCard = ({ achievements }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 animate-slide-in"
      style={{ animationDelay: "0.3s" }}
    >
      <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Achievements
      </h2>
      <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
        {achievements && achievements.length > 0 ? (
          achievements.map((achievement, index) => (
            <li key={index}>{achievement.title}</li> 
          ))
        ) : (
          <p className="text-sm text-slate-500">No achievements recorded.</p>
        )}
      </ul>
    </div>
  );
};

export default AchievementsCard;