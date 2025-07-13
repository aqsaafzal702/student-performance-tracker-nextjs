import Link from "next/link";

export default function Sidebar({ active }) {
  return (
    <aside className="w-64 bg-blue-900 text-white p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-6 text-white">Admin Dashboard</h2>
      <nav className="flex flex-col gap-2">
        <Link
          href="/teacher/dashboard"
          className={`rounded px-4 py-2 ${active === "dashboard" ? "bg-blue-500" : "hover:bg-blue-500"}`}
        >
          Dashboard
        </Link>
        <Link
          href="/teacher/announcements"
          className={`rounded px-4 py-2 ${active === "announcements" ? "bg-blue-500" : "hover:bg-blue-500"}`}
        >
          Announcements
        </Link>
        <Link
          href="/login"
          className="bg-red-600 hover:bg-red-700 text-center rounded px-4 py-2 mt-auto"
        >
          Logout
        </Link>
      </nav>
    </aside>
  );
}
