// "use client";
// import Sidebar from "../components/Sidebar";
// import StudentForm from "../components/StudentForm";
// import StudentTable from "../components/StudentTable";
// import { useEffect, useState } from "react";

// export default function DashboardPage() {
//   const [students, setStudents] = useState([]);

//   const fetchStudents = async () => {
//     const res = await fetch("/api/teacher/students");
//     const data = await res.json();
//     setStudents(data.students); // ✅ Important
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-50 text-gray-900">
//       <Sidebar active="dashboard" />
//       <main className="flex-1 p-6 overflow-y-auto">
//         <h1 className="text-2xl font-bold mb-6">Manage Students</h1>
//         <StudentForm onStudentAdded={fetchStudents} /> {/* ✅ Hook trigger */}
//         <StudentTable students={students} onDelete={fetchStudents} /> {/* ✅ Pass student data */}
//       </main>
//     </div>
//   );
// }

"use client";

import Sidebar from "../components/Sidebar";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null); // ✅ Track the student being edited

  const fetchStudents = async () => {
    const res = await fetch("/api/teacher/students");
    const data = await res.json();
    setStudents(data.students);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar active="dashboard" />
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Manage Students</h1>
        <StudentForm
          onStudentAdded={fetchStudents}
          editStudent={editStudent}
          setEditStudent={setEditStudent}
        />
        <StudentTable
          students={students}
          onDelete={fetchStudents}
          onEdit={setEditStudent}
        />
      </main>
    </div>
  );
}
