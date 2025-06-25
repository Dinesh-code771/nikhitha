import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Interior Designer",
      company: "Vasundhara Developers",
      location: "Vijayawada, Andhra Pradesh",
      type: "Full-time",
      responsibilities: [
        "Designed and executed interior projects for luxury villas",
        "Focused on space planning, material selection, and aesthetic detailing"
      ],
      color: "blue"
    },
    {
      title: "Freelance Residential Designer & Layout Planner",
      company: "Independent Practice",
      location: "India",
      type: "Freelance",
      responsibilities: [
        "Delivered complete interior design solutions for high-end villas",
        "Used AutoCAD, SketchUp, and Photoshop to develop floor plans, 3D models, and presentation materials",
        "Managed projects from concept to handover with emphasis on natural lighting and ventilation",
        "Customized solutions based on client needs and preferences"
      ],
      color: "amber"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Professional <span style={{ color: 'rgb(59, 136, 252)' }}>Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r rounded-full mx-auto" style={{ background: 'linear-gradient(to right, rgb(59, 136, 252), rgb(245, 158, 11))' }}></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gradient-to-r from-white to-slate-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                  exp.color === 'blue' ? '' : 'bg-amber-600'
                }`} style={exp.color === 'blue' ? { backgroundColor: 'rgb(59, 136, 252)' } : {}}>
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold" style={{ color: 'rgb(59, 136, 252)' }}>
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-2 sm:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.color === 'blue' ? 'text-blue-800' : 'bg-amber-100 text-amber-800'
                      }`} style={exp.color === 'blue' ? { backgroundColor: 'rgba(59, 136, 252, 0.1)' } : {}}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-slate-500 mb-6">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: 'rgb(59, 136, 252)' }} />
                        <p className="text-slate-600">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;