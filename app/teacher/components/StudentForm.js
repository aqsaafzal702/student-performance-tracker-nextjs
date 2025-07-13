// "use client";
// import { useState } from "react";

// export default function StudentForm({ onStudentAdded }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     rollNo: "",
//     course: "",
//     marks: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Submitting...");

//     const parsedMarks = Number(formData.marks);
//     if (isNaN(parsedMarks)) {
//       setStatus("Marks must be a number");
//       return;
//     }

//     try {
//       const res = await fetch("/api/teacher/students", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, marks: parsedMarks }),
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setStatus("Student added successfully!");
//         onStudentAdded?.(data.student);
//         setFormData({ name: "", rollNo: "", course: "", marks: "" });
//       } else {
//         const text = await res.text();
//         console.error("❌ Server error:", text);
//         setStatus("Failed to add student");
//       }
//     } catch (err) {
//       console.error("🚨 Network error:", err);
//       setStatus("Failed to add student");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="card mb-6">
//       <div className="grid grid-cols-2 gap-4">
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input type="text" name="rollNo" placeholder="Roll No" value={formData.rollNo} onChange={handleChange} required />
//         <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />
//         <input type="number" name="marks" placeholder="Marks" value={formData.marks} onChange={handleChange} required />
//       </div>
//       <button type="submit" className="btn-primary mt-4">Add Student</button>
//       {status && <p className="mt-2 text-sm">{status}</p>}
//     </form>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function StudentForm({ onStudentAdded, editStudent, setEditStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    course: "",
    marks: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (editStudent) {
      setFormData({
        name: editStudent.name,
        rollNo: editStudent.rollNo,
        course: editStudent.course,
        marks: editStudent.marks,
      });
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedMarks = Number(formData.marks);
    if (isNaN(parsedMarks)) return setStatus("Marks must be a number");

    try {
      const method = editStudent ? "PUT" : "POST";
      const res = await fetch("/api/teacher/students", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          marks: parsedMarks,
          id: editStudent?._id,
        }),
      });

      if (res.ok) {
        setStatus(editStudent ? "Student updated!" : "Student added!");
        setFormData({ name: "", rollNo: "", course: "", marks: "" });
        setEditStudent(null);
        onStudentAdded?.();
      } else {
        setStatus("Failed to submit");
      }
    } catch (err) {
      console.error("❌ Submit error:", err);
      setStatus("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card mb-6">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} placeholder="Roll No" required />
        <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="Course" required />
        <input type="number" name="marks" value={formData.marks} onChange={handleChange} placeholder="Marks" required />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button type="submit" className="btn-primary">
          {editStudent ? "Update Student" : "Add Student"}
        </button>
        {editStudent && (
          <button
            type="button"
            className="text-red-500 underline"
            onClick={() => {
              setEditStudent(null);
              setFormData({ name: "", rollNo: "", course: "", marks: "" });
            }}
          >
            Cancel Edit
          </button>
        )}
      </div>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </form>
  );
}
