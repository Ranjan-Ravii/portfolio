import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Currency Converter",
    description: "A full-stack currency converter with React.",
    image: "/currency.jpg",
    github: "https://github.com/Ranjan-Ravii/currency-converter",
    live: "https://ranjan-ravii.github.io/currency-converter/",
    tech: ["React", "Tailwind", "Currency API"]
  },
  {
    title: "Password Generator",
    description: "Modern way to generate strong password.",
    image: "/password.jpg",
    github: "https://github.com/Ranjan-Ravii/password-generator",
    live: "https://ranjan-ravii.github.io/password-generator/",
    tech: ["React", "Tailwind"]
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com",
    live: "https://example.com",
    tech: ["React", "Firebase", "Material-UI"]
  },
  {
    title: "Youtube Video Downloader",
    description: "Real-time Youtube Video Downloader uisng video Link",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com",
    live: "https://example.com",
    tech: ["React", "Tailwind", "Flask"]
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-20 bg-[#1A334F]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured <span className="text-[#FF6500]">Projects</span>
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-[#1E3E62] rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-[#0B192C] text-[#FF6500] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-[#FF6500] transition-colors"
                      >
                        <Github size={20} />
                        Code
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-[#FF6500] transition-colors"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-[#FF6500]' : 'bg-[#1E3E62]'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;