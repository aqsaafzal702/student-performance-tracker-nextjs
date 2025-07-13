// "use client";
// export default function StudentTable({ students, onDelete }) {
//   const handleDelete = async (id) => {
//     const confirmed = confirm("Are you sure you want to delete this student?");
//     if (!confirmed) return;

//     try {
//       const res = await fetch("/api/teacher/students", {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ id }),
//       });

//       if (res.ok) {
//         onDelete?.(); // refresh student list in parent
//       } else {
//         console.error("❌ Failed to delete");
//       }
//     } catch (err) {
//       console.error("❌ Error deleting student:", err);
//     }
//   };

//   return (
//     <div className="card">
//       <h2 className="text-lg font-semibold mb-4">Student List</h2>
//       <table className="table-auto w-full">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Roll No</th>
//             <th>Course</th>
//             <th>Marks</th>
//             <th>Action</th> {/* ✅ New column */}
//           </tr>
//         </thead>
//         <tbody>
//           {students && students.length > 0 ? (
//             students.map((student, index) => (
//               <tr key={student._id || index}>
//                 <td>{student.name}</td>
//                 <td>{student.rollNo}</td>
//                 <td>{student.course}</td>
//                 <td>{student.marks}</td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(student._id)}
//                     className="text-red-600 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="text-center text-gray-500 py-4">
//                 No students found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }
"use client";

export default function StudentTable({ students, onDelete, onEdit }) {
  const handleDelete = async (id) => {
    if (!confirm("Delete this student?")) return;
    await fetch("/api/teacher/students", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    onDelete?.();
  };

  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-4">Student List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((s) => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.rollNo}</td>
                <td>{s.course}</td>
                <td>{s.marks}</td>
                <td className="flex gap-2">
                  <button onClick={() => onEdit(s)} className="text-blue-600 underline">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(s._id)} className="text-red-600 underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5" className="text-center">No students</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
