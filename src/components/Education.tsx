import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Architecture",
      institution: "Church of South Indian Institute of Technology",
      period: "08/2020 – Present",
      location: "Hyderabad, Telangana, India",
      color: "blue"
    },
    {
      degree: "Schooling & Intermediate",
      institution: "Telangana Model School & College",
      period: "07/2016 – 05/2019",
      location: "Telangana, India",
      color: "amber"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Education & <span style={{ color: 'rgb(59, 136, 252)' }}>Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r rounded-full mx-auto" style={{ background: 'linear-gradient(to right, rgb(59, 136, 252), rgb(245, 158, 11))' }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                edu.color === 'blue' ? '' : 'bg-amber-600'
              }`} style={edu.color === 'blue' ? { backgroundColor: 'rgb(59, 136, 252)' } : {}}>
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                {edu.degree}
              </h3>
              
              <p className="text-lg text-slate-600 mb-4">
                {edu.institution}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-slate-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{edu.period}</span>
                </div>
                
                <div className="flex items-center text-slate-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;