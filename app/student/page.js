import Head from "next/head";
import Link from "next/link";
import StudentHeader from "@/app/student/components/dashboard/StudentHeader";
//import StudentFooter from "@/app/student/components/dashboard/StudentFooter";
import StudentCard from "@/app/student/components/dashboard/StudentCard";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 flex flex-col">
      <Head>
        <title>Student Performance Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <StudentHeader />
      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Welcome to the Educational Performance Tracker
          </h2>
          <p className="text-xl text-slate-600">
            Monitor student progress, track performance metrics, and generate
            insights with our intuitive dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <StudentCard
            title="Analysis Dashboard"
            description="View performance metrics, track progress, and more."
            link="/student/analysis"
            iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            color="bg-gradient-to-r from-blue-500 to-indigo-700"
          />

          <StudentCard
            title="Student Profile"
            description="Access student information, academic records, and more."
            link=" /student/profile"
            iconPath="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            color="bg-gradient-to-r from-purple-500 to-indigo-700"
          />
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  );
}
