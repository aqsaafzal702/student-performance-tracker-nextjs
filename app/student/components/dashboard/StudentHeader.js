import React from 'react';
import Link from 'next/link';

const StudentHeader = () => {
  return (
    <header className="bg-white shadow-sm py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-indigo-900">Student Performance Dashboard</h1>
        <Link href="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </Link>        
      </div>
    </header>
  );
};

export default StudentHeader;