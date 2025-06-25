import React from 'react';
import { X, ExternalLink, Calendar, MapPin, Tag } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tools: string[];
  tags: string[];
  location?: string;
  year?: string;
  details: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between rounded-t-2xl">
            <h2 className="text-2xl font-bold text-slate-800">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Project Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              {project.year && (
                <div className="flex items-center text-slate-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{project.year}</span>
                </div>
              )}
              {project.location && (
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{project.location}</span>
                </div>
              )}
            </div>
            
            {/* Images Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {project.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden bg-slate-100 aspect-video">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Project Overview</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
              <p className="text-slate-600 leading-relaxed">{project.details}</p>
            </div>
            
            {/* Tools */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Tags */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Project Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;