'use client';

import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';


import Footer from '@/components/Footer';

export default function Home() {
  const FeaturesRef = useRef(null);
  const ContactRef = useRef(null);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
    <Footer/>
  

    </div>
  );
    
}
