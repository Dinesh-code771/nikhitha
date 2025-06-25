import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-amber-50 to-rose-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
            <span className="block">NIKHITHA</span>
            <span className="block" style={{ color: 'rgb(59, 136, 252)' }}>KORADALA</span>
          </h1>
          
          {/* Title */}
          <div className="inline-block px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-8 shadow-lg">
            <p className="text-xl sm:text-2xl font-medium text-slate-700 tracking-wide">
              Architect
            </p>
          </div>
          
          {/* Tagline */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Designing thoughtful, sustainable spaces that blend beauty with function.
          </p>
          
          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center px-8 py-4 text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{ backgroundColor: 'rgb(59, 136, 252)' }}
          >
            <span className="mr-2 font-medium">Explore My Work</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;