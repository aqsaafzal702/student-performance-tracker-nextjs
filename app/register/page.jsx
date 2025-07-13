'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaFacebookF, FaMicrosoft } from 'react-icons/fa';

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [role, setRole] = useState('student');

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value.toLowerCase();
    const password = e.target.password.value;

    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.msg || 'Registration failed');

      const token = data.token;
      localStorage.setItem('token', token);
      const payload = JSON.parse(atob(token.split('.')[1]));
      const userRole = payload.role;

      router.push(userRole === 'teacher' ? '/teacher' : '/student');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A103D] text-[#F5F3FF] font-poppins overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-r from-[#1A103D] to-[#0E0825] bg-[length:400%_400%] animate-gradient -z-10"></div>

      <div className="w-full max-w-md mx-4 p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg shadow-black/20 animate-fadeIn">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#0c2c90] to-[#8F87F1] bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-white/70">Sign up to get started</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleRegister}>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0c2c90]" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full py-4 pl-12 pr-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-[#0c2c90] focus:ring-2 focus:ring-[#0c2c90]/20 transition-all"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0c2c90]" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full py-4 pl-12 pr-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-[#0c2c90] focus:ring-2 focus:ring-[#0c2c90]/20 transition-all"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0c2c90]" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full py-4 pl-12 pr-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-[#0c2c90] focus:ring-2 focus:ring-[#0c2c90]/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-white/70 mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full py-4 pl-4 pr-4 bg-white/10 border border-white/20 rounded-full text-blue placeholder-white/50 focus:outline-none focus:border-[#0c2c90] focus:ring-2 focus:ring-[#0c2c90]/20 transition-all"
            >
              <option value="student" className='text-black'>Student</option>
              <option value="teacher" className='text-black'>Teacher</option>
            </select>
          </div>

          <button
            type="submit"
            className="py-4 px-6 bg-[#0c2c90] text-white rounded-full font-semibold shadow-lg shadow-[#0c2c90]/30 hover:bg-[#8F87F1] hover:translate-y-[-3px] hover:shadow-xl hover:shadow-[#8F87F1]/40 transition-all"
          >
            Register
          </button>

          {error && <p className="text-red-400 text-center">{error}</p>}

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="px-4 text-white/50">or continue with</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-[#0c2c90] hover:translate-y-[-3px] hover:shadow-lg hover:shadow-[#0c2c90]/30 transition-all">
              <FaGoogle className="text-xl" />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-[#0c2c90] hover:translate-y-[-3px] hover:shadow-lg hover:shadow-[#0c2c90]/30 transition-all">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-[#0c2c90] hover:translate-y-[-3px] hover:shadow-lg hover:shadow-[#0c2c90]/30 transition-all">
              <FaMicrosoft className="text-xl" />
            </a>
          </div>

          <p className="text-center text-white/70">
            Already have an account?{' '}
            <a href="/login" className="text-white font-semibold hover:underline transition-colors">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}