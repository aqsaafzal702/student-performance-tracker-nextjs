import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1A103D] py-20 px-[5%] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              EduTrack
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-[#3674B5]"></span>
            </h3>
            <p className="text-[rgba(255,255,255,0.7)] mb-6 leading-relaxed">
              Revolutionizing education through data-driven insights and performance tracking.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center text-white hover:bg-[#3674B5] hover:-translate-y-1 transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center text-white hover:bg-[#3674B5] hover:-translate-y-1 transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center text-white hover:bg-[#3674B5] hover:-translate-y-1 transition-all duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center text-white hover:bg-[#3674B5] hover:-translate-y-1 transition-all duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-[#3674B5]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-[rgba(255,255,255,0.7)] hover:text-[#3674B5] transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-[rgba(255,255,255,0.7)] hover:text-[#3674B5] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[rgba(255,255,255,0.7)] hover:text-[#3674B5] transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-[rgba(255,255,255,0.7)] hover:text-[#3674B5] transition-colors duration-300">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-[#3674B5]"></span>
            </h3>
            <div className="space-y-4">
              <p className="flex items-center text-[rgba(255,255,255,0.7)]">
                <FaEnvelope className="mr-3 text-[#3674B5]" />
                contact@edutrack.com
              </p>
              <p className="flex items-center text-[rgba(255,255,255,0.7)]">
                <FaPhone className="mr-3 text-[#3674B5]" />
                +92 300 1234567
              </p>
              <p className="flex items-center text-[rgba(255,255,255,0.7)]">
                <FaMapMarkerAlt className="mr-3 text-[#3674B5]" />
                Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] text-center text-[rgba(255,255,255,0.5)] text-sm">
          <p>&copy; 2024 EduTrack. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;