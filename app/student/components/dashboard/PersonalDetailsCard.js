// app/components/dashboard/PersonalDetailsCard.js
import React from 'react';

const PersonalDetailsCard = ({ fullName, email, strengthsAndInterests }) => {
  return (
    <div className="p-8 md:w-2/3">
      <div>
        <h3 className="text-sm text-slate-500 uppercase font-semibold mb-2">
          Personal Details
        </h3>
        <ul className="space-y-2">
          <li className="flex">
            <span className="text-slate-600 font-medium w-20">
              Full Name:
            </span>
            <span className="text-slate-900">{fullName}</span>
          </li>
          <li className="flex">
            <span className="text-slate-600 font-medium w-20">
              Email:
            </span>
            <span className="text-slate-900">{email}</span>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-sm text-slate-500 uppercase font-semibold mb-2">
          Strengths & Interests
        </h3>
        <div className="flex flex-wrap gap-2">
          {strengthsAndInterests && strengthsAndInterests.map((interest, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs" 
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsCard;