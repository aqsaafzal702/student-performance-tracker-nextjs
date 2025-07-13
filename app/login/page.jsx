'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF, FaMicrosoft } from 'react-icons/fa';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.toLowerCase();
    const password = e.target.password.value;

    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.msg || 'Login failed');

      // Store token and decode role
      const token = data.token;
      localStorage.setItem('token', token);
      const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
      const role = payload.role;

      // Redirect based on role
      if (role === 'teacher') router.push('/teacher');
      else if (role === 'student') router.push('/student');
      else setError('Invalid role');
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
            Welcome Back
          </h1>
          <p className="text-white/70">Sign in to access your dashboard</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0c2c90]" />
            <input
              type="email"
              id="email"
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

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
            <label className="flex items-center gap-2 text-white/70 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-[#0c2c90]" />
              Remember me
            </label>
            <a href="#" className="text-white hover:underline transition-colors">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="py-4 px-6 bg-[#0c2c90] text-white rounded-full font-semibold shadow-lg shadow-[#0c2c90]/30 hover:bg-[#8F87F1] hover:translate-y-[-3px] hover:shadow-xl hover:shadow-[#8F87F1]/40 transition-all"
          >
            Login
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
            Don't have an account?{' '}
            <a href="/register" className="text-white font-semibold hover:underline transition-colors">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}