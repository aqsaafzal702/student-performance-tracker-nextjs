import { GeistSans, GeistMono } from 'geist/font';
import './globals.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-gray-950 text-white antialiased">
        
        
          {children}
          
          
          
      
      </body>
    </html>
  );
}