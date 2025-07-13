'use client';
import { useState } from 'react';

export default function AnnouncementForm() {
  const [formData, setFormData] = useState({ title: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const res = await fetch('/api/teacher/announcements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ title: '', message: '' });
        setStatus('Announcement created successfully!');
      } else {
        const error = await res.json();
        setStatus(error.message || 'Error creating announcement.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Create Announcement</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="mb-4 p-2 w-full border border-gray-300 rounded"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        className="mb-4 p-2 w-full border border-gray-300 rounded"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn-primary">Post</button>
      {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
    </form>
  );
}
