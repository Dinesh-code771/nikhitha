import React, { useState } from "react";
import { Eye, Calendar, MapPin, Home, Bed, Sofa, Building } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface ImageCategory {
  name: string;
  images: string[];
  icon?: React.ReactNode;
}

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  imageCategories?: ImageCategory[];
  tools: string[];
  tags: string[];
  location?: string;
  year?: string;
  details: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Residential Complex",
      description:
        "Complete interior design solution for a high-end villa with emphasis on natural lighting and ventilation.",
      images: [
        "./project-1-exterior.jpeg",
        "./project-1-living.jpeg",
        "./project-1-hall.jpeg",
        "./project-1-bedroom1.jpeg",
        "./project-1-bedroom2.jpeg",
        "./project-1-bedroom3.jpeg",
        "./project-1-entrence.jpeg",
      ],
      imageCategories: [
        {
          name: "Exterior",
          images: ["./project-1-exterior.jpeg"],
          icon: <Building className="w-5 h-5" />,
        },
        {
          name: "Living Room",
          images: ["./project-1-living.jpeg"],
          icon: <Sofa className="w-5 h-5" />,
        },
        {
          name: "Hall",
          images: ["./project-1-hall.jpeg"],
          icon: <Home className="w-5 h-5" />,
        },
        {
          name: "Bedrooms",
          images: [
            "./project-1-bedroom1.jpeg",
            "./project-1-bedroom2.jpeg",
            "./project-1-bedroom3.jpeg",
          ],
          icon: <Bed className="w-5 h-5" />,
        },
        {
          name: "Entrance",
          images: ["./project-1-entrence.jpeg"],
          icon: <Home className="w-5 h-5" />,
        },
      ],
      tools: ["AutoCAD", "SketchUp", "Photoshop"],
      tags: [
        "Residential Design",
        "Luxury Villas",
        "Interior Design",
        "Space Planning",
      ],
      location: "Vijayawada, Andhra Pradesh",
      year: "2023",
      details:
        "This project involved creating a comprehensive interior design for a luxury villa, focusing on maximizing natural light and ensuring optimal ventilation throughout the space. The design incorporated sustainable materials and custom furniture pieces tailored to the client's lifestyle.",
    },
    {
      id: 2,
      title: "Sustainable Villa Layout Planning",
      description:
        "Eco-friendly residential design with focus on sustainable materials and energy efficiency.",
      images: [
        "./project-2-exterior.png",
        "./project-2-dining.png",
        "./project-2-living-room-exterior.png",
        "./project-2-hall.png",
      ],
      imageCategories: [
        {
          name: "Exterior",
          images: ["./project-2-exterior.png"],
          icon: <Building className="w-5 h-5" />,
        },
        {
          name: "Dining Area",
          images: ["./project-2-dining.png"],
          icon: <Sofa className="w-5 h-5" />,
        },
        {
          name: "Living Room",
          images: ["./project-2-hall.png"],
          icon: <Sofa className="w-5 h-5" />,
        },
      ],
      tools: ["AutoCAD", "SketchUp", "Photoshop"],
      tags: [
        "Sustainable Design",
        "Residential Planning",
        "Eco-Friendly",
        "Energy Efficient",
      ],
      location: "Hyderabad, Telangana",
      year: "2023",
      details:
        "A comprehensive sustainable villa design that prioritizes environmental consciousness while maintaining luxury and comfort. The project featured solar integration, rainwater harvesting systems, and locally sourced materials.",
    },
    {
      id: 3,
      title: "Luxury Villa Interior Design",
      description:
        "Contemporary residential design with innovative space utilization and modern aesthetics.",
      images: [
        "./project-3-interior.jpg",
        "./project-3-living-space.jpg",
        "./project-3-hall.jpg",
        "./project-3-bedroom-1.jpg",
        "./project-3-bedroom2.jpg",
        "./project-3-bedroom-4.jpg",
        "./project-3-bedroom-5.jpg",
        "./project-3-bedroom-6.jpg",
        "./project-3-bedroom-7.jpg",
        "./project-3-bedroom-8.jpg",
        "./project-3-bedroom-9.jpg",
        "./project-3-bedroom-10.jpg",
        "./project-3-bdroom-11.jpg",
        "./project-3-bedroom-12.jpg",
        "./project-3-hall-2.jpg",
        "./project-3-hall-3.jpg",
        "./prject-3-hall-4.jpg",
        "./project-3-kithchen.jpg",
        "./project-3-ward-space.jpg",
        "./project-3-home-theater.jpg",
        "./prject-3-theater-2.jpg",
      ],
      imageCategories: [
        {
          name: "Interior Overview",
          images: ["./project-3-interior.jpg"],
          icon: <Home className="w-5 h-5" />,
        },
        {
          name: "Living Spaces",
          images: [
            "./project-3-living-space.jpg",
            "./project-3-hall.jpg",
            "./project-3-hall-2.jpg",
            "./project-3-hall-3.jpg",
            "./prject-3-hall-4.jpg",
          ],
          icon: <Sofa className="w-5 h-5" />,
        },
        {
          name: "Bedrooms",
          images: [
            "./project-3-bedroom-1.jpg",
            "./project-3-bedroom2.jpg",
            "./project-3-bedroom-4.jpg",
            "./project-3-bedroom-5.jpg",
            "./project-3-bedroom-6.jpg",
            "./project-3-bedroom-7.jpg",
            "./project-3-bedroom-8.jpg",
            "./project-3-bedroom-9.jpg",
            "./project-3-bedroom-10.jpg",
            "./project-3-bdroom-11.jpg",
            "./project-3-bedroom-12.jpg",
          ],
          icon: <Bed className="w-5 h-5" />,
        },
        {
          name: "Kitchen & Utility",
          images: ["./project-3-kithchen.jpg", "./project-3-ward-space.jpg"],
          icon: <Home className="w-5 h-5" />,
        },
        {
          name: "Entertainment",
          images: ["./project-3-home-theater.jpg", "./prject-3-theater-2.jpg"],
          icon: <Home className="w-5 h-5" />,
        },
      ],
      tools: ["AutoCAD", "SketchUp", "Photoshop"],
      tags: [
        "Modern Design",
        "Residential Complex",
        "Space Optimization",
        "Contemporary",
      ],
      location: "India",
      year: "2022",
      details:
        "A modern residential complex design focusing on efficient space utilization and contemporary aesthetics. The project incorporated smart home technologies and community spaces that foster social interaction among residents.",
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-blue-50 to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Featured{" "}
            <span style={{ color: "rgb(59, 136, 252)" }}>Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Explore my portfolio of residential design projects, showcasing
            innovative solutions and sustainable practices.
          </p>
          <div
            className="w-24 h-1 bg-gradient-to-r rounded-full mx-auto"
            style={{
              background:
                "linear-gradient(to right, rgb(59, 136, 252), rgb(245, 158, 11))",
            }}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(project)}
                    className="px-6 py-3 bg-white text-slate-800 rounded-full font-medium hover:text-white transition-colors duration-200 flex items-center space-x-2"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgb(59, 136, 252)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                    }}
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-slate-800 mb-3 group-hover:transition-colors duration-200"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgb(59, 136, 252)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                  }}
                >
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-2 mb-4">
                  {project.year && (
                    <div className="flex items-center text-slate-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.year}</span>
                    </div>
                  )}
                  {project.location && (
                    <div className="flex items-center text-slate-500 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(59, 136, 252, 0.1)",
                        color: "rgb(59, 136, 252)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                      +{project.tags.length - 2} more
                    </span>
                  )}
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
