'use client';
import { useEffect, useState } from 'react';

export default function AnnouncementList() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch('/api/teacher/announcements');
        const data = await res.json();
        setAnnouncements(data.announcements || []);
      } catch (error) {
        console.error('Failed to fetch announcements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;

    try {
      const res = await fetch(`/api/teacher/announcements/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setAnnouncements((prev) => prev.filter((a) => a._id !== id));
      } else {
        console.error('Failed to delete announcement.');
      }
    } catch (error) {
      console.error('Error deleting announcement:', error);
    }
  };

  if (loading) {
    return <p>Loading announcements...</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">📢 Announcements</h2>
      {announcements.length === 0 ? (
        <p className="text-gray-500">No announcements yet.</p>
      ) : (
        <ul className="space-y-4">
          {announcements.map((a) => (
            <li key={a._id} className="bg-white p-4 shadow rounded relative">
              <h3 className="text-lg font-bold text-blue-900">{a.title}</h3>
              <p className="text-gray-700 mt-1">{a.message}</p>
              <p className="text-sm text-gray-400 mt-2">
                {new Date(a.createdAt).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(a._id)}
                className="absolute top-2 right-2 text-red-600 text-sm hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
