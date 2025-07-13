export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to the Teacher's Portal</h1>
      <p className="text-lg text-gray-700 mb-8">
        Easily manage students and announcements from the dashboard.
      </p>
      <div className="flex gap-4">
        <a
          href="/teacher/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </a>
        <a
          href="/teacher/announcements"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          View Announcements
        </a>
      </div>
    </div>
  );
}
