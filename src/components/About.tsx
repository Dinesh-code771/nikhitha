import React from 'react';
import { Heart, Leaf, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-8">
              About <span style={{ color: 'rgb(59, 136, 252)' }}>Me</span>
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="text-xl leading-relaxed mb-6">
                This is Nikhitha from India, an architecture graduate passionate about designing meaningful and beautiful spaces. With a strong interest in sustainable and human-centric design, I aim to pursue a Master's in Architecture to deepen my expertise and create impactful built environments.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgb(59, 136, 252)' }}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Human-Centric</h3>
                <p className="text-sm text-slate-600">Designing with empathy and understanding</p>
              </div>
              
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Sustainable</h3>
                <p className="text-sm text-slate-600">Respecting the environment</p>
              </div>
              
              <div className="text-center p-6 bg-rose-50 rounded-xl">
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Collaborative</h3>
                <p className="text-sm text-slate-600">Working closely with clients</p>
              </div>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Design Philosophy</h3>
            <blockquote className="text-slate-600 text-lg leading-relaxed italic">
              "I believe in creating spaces that tell stories — spaces that breathe, inspire, and adapt to human needs while respecting the environment. Every line drawn is a step towards designing with empathy, balance, and intent."
            </blockquote>
            <div className="mt-6 h-1 w-16 bg-gradient-to-r rounded-full" style={{ background: 'linear-gradient(to right, rgb(59, 136, 252), rgb(245, 158, 11))' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;