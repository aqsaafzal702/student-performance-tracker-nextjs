import Link from 'next/link';
import { FaChartLine, FaChalkboardTeacher } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="py-20 px-[5%] bg-[rgba(27,38,59,0.7)] backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 text-white">Key Features</h2>
        <p className="text-lg text-center text-[rgba(255,255,255,0.7)] mb-12">
          Designed to enhance the educational experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-lg rounded-xl p-8 border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-3 hover:shadow-lg hover:border-[rgba(72,149,239,0.3)]">
            <div className="w-[70px] h-[70px] bg-[rgba(72,149,239,0.1)] rounded-full flex justify-center items-center mb-6">
              <FaChartLine className="text-3xl text-[#3674B5]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Performance Analytics</h3>
            <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
              Real-time tracking of grades, attendance, and learning progress with interactive dashboards.
            </p>
          </div>
          
          <Link href="/student_dashboard" className="no-underline">
            <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-lg rounded-xl p-8 border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-3 hover:shadow-lg hover:border-[rgba(72,149,239,0.3)]">
              <div className="w-[70px] h-[70px] bg-[rgba(72,149,239,0.1)] rounded-full flex justify-center items-center mb-6">
                <FaChalkboardTeacher className="text-3xl text-[#3674B5]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Student Performance Analysis</h3>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                Personalized learning insights and recommendations to help students improve.
              </p>
            </div>
          </Link>
          
          <Link href="/dashboard" className="no-underline">
            <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-lg rounded-xl p-8 border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-3 hover:shadow-lg hover:border-[rgba(72,149,239,0.3)]">
              <div className="w-[70px] h-[70px] bg-[rgba(72,149,239,0.1)] rounded-full flex justify-center items-center mb-6">
                <FaChalkboardTeacher className="text-3xl text-[#3674B5]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Teacher Dashboard</h3>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                Comprehensive tools for educators to monitor class performance and identify at-risk students.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;