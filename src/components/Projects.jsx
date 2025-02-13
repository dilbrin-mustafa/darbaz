import React from 'react';
import { ExternalLink, Smartphone, Globe, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Wardil",
      logo: "src/assets/wardil.jpg",
      description: "A charity platform dedicated to supporting underprivileged communities, providing resources, and fostering collaboration.",
      link: "https://wardil.org",
      type: "web",
      techs: ["React.js", "Laravel", "Vite.js"],
      platforms: ["web"]
    },
    {
      name: "Shahan Living",
      logo: "src/assets/shahan_app.png",
      description: "A mobile app providing real-time chat support, user connectivity, and updates on Shahan Tower, Cavill, and French Valvche. Stay informed and engaged with live news and community features.",
      link: "https://nextu.com",
      type: "mobile",
      techs: ["Flutter", "Firebase", "Dart" , "Node.js"],
      platforms: ["android", "ios"]
    }
  ];

  return (
    <section className="py-20 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-[#E6F1FF] mb-4">Big Projects</h2>
          <p className="text-xl text-[#8892B0]">
            SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="group relative bg-[#112240] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              {/* Project Card Content */}
              <div className="p-8">
                {/* Logo Area */}
                <div className="h-40 flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-[#112240] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img 
                    src={project.logo} 
                    alt={project.name}
                    className="max-h-full max-w-[80%] object-contain"
                  />
                </div>

                {/* Project Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#E6F1FF] mb-3">{project.name}</h3>
                  <p className="text-[#8892B0] mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.techs.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-[#233554] rounded-full text-sm text-[#64FFDA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Platform Icons */}
                  <div className="flex justify-center gap-4 mb-6">
                    {project.type === 'mobile' ? (
                      <Smartphone className="w-5 h-5 text-[#64FFDA]" />
                    ) : (
                      <Globe className="w-5 h-5 text-[#64FFDA]" />
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#233554] rounded-lg text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 border border-[#64FFDA] rounded-lg text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#64FFDA] rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;