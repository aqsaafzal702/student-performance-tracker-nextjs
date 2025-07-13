import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center px-[5%] pt-32 pb-20 relative overflow-hidden max-w-7xl mx-auto">
      <div className="flex-1 z-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
  Transform <span className="text-[#3674B5] relative inline-block">Education
    <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[rgba(72,149,239,0.3)] -z-10"></span>
  </span> Through Data
</h1>
        <p className="text-lg text-[rgba(255,255,255,0.8)] mb-8 max-w-[600px]">
          Advanced analytics platform for students and educators to track, analyze, and improve academic performance.
        </p>
        <div className="flex gap-4">
          <Link href="/login" className="bg-[#3674B5] text-white py-3 px-8 rounded-full font-semibold no-underline transition-all duration-300 hover:bg-[#8F87F1] hover:-translate-y-1 hover:shadow-lg shadow-[0_10px_20px_rgba(72,149,239,0.3)]">
            Get Started
          </Link>
          <Link href="#features" className="border-2 border-[#3674B5] text-[#3674B5] py-3 px-8 rounded-full font-semibold no-underline transition-all duration-300 hover:bg-[#3674B5] hover:text-white hover:-translate-y-1">
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
        <img 
          src="/images/dashboard.jpg" 
          alt="Dashboard Preview" 
          className="w-full max-w-[600px]  shadow-lg p-4 rounded-md bg-gradient-to-br from-[rgba(143,135,241,0.2)] to-[rgba(254,210,226,0.1)] animate-morph"
        />
      </div>
    </section>
  );
};

export default Hero;