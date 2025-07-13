// app/student/layout.js
//import StudentHeader from '@/app/student/components/dashboard/StudentHeader';
import StudentFooter from '@/app/student/components/dashboard/StudentFooter';

export default function StudentLayout({ children }) {
  return (
    <> 
      <main className="min-h-screen bg-gray-950 text-white antialiased">
        {children}
      </main>
      <StudentFooter />
    </>
  );
}