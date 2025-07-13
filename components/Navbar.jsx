
import { FaGraduationCap } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-6 px-[5%] z-50 transition-all duration-300 bg-[rgba(27,38,59,0.8)] backdrop-blur-lg">
      <nav className="flex justify-between items-center">
        <a href="#" className="flex items-center text-2xl font-bold text-white no-underline">
          <FaGraduationCap className="mr-2 text-[#3674B5]" />
          <span>EduTrack</span>
        </a>
        
        <ul className="hidden md:flex list-none">
          <li className="ml-8">
            <a href="#features" className="text-white no-underline font-medium transition-colors duration-300 relative hover:text-[#3674B5]">
              Features
              <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-[#3674B5] transition-all duration-300 hover:w-full"></span>
            </a>
          </li>
          <li className="ml-8">
            <a href="#features" className="text-white no-underline font-medium transition-colors duration-300 relative hover:text-[#3674B5]">
              About
              <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-[#3674B5] transition-all duration-300 hover:w-full"></span>
            </a>
          </li>
          <li className="ml-8">
            <a href="#contact" className="text-white no-underline font-medium transition-colors duration-300 relative hover:text-[#3674B5]">
              Contact
              <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-[#3674B5] transition-all duration-300 hover:w-full"></span>
            </a>
          </li>
          <li className="ml-8">
            <a href="/login" className="bg-[#3674B5] py-2 px-6 rounded-full transition-all duration-300 hover:bg-[#8F87F1] hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(67,97,238,0.3)]">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;