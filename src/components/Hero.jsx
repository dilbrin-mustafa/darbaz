import React from 'react';
import { Github, Linkedin, Mail, Facebook, ExternalLink, Terminal, Code2, Database } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { 
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, 
      href: "https://github.com/darbazrasul", 
      bg: "bg-gray-800",
      label: "GitHub"
    },
    { 
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, 
      href: "https://www.linkedin.com/in/darbaz-rasull-19375a252/", 
      bg: "bg-blue-600",
      label: "LinkedIn"
    },
    { 
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, 
      href: "darbazrasul721@gmail.com", 
      bg: "bg-red-600",
      label: "Email"
    },
    { 
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />, 
      href: "https://www.facebook.com/share/186GjKNPqr/?mibextid=wwXIfr", 
      bg: "bg-blue-500",
      label: "Facebook"
    },
  ];

  const technologies = [
    { name: 'Flutter', icon: '📱' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Laravel', icon: '🔥' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'MySQL', icon: '🗄️' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Terminal-like header */}
      {/* <div className="fixed top-0 left-0 right-0 bg-slate-800 border-b border-slate-700 p-2 z-50">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 sm:ml-4 text-xs sm:text-sm font-mono">darbaz_portfolio.jsx</span>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8 sm:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 space-y-6 sm:space-y-8">
            {/* Code-style welcome */}
            <div className="font-mono text-teal-400 text-sm sm:text-base opacity-80">
              <span className="text-gray-200">const</span> greeting <span className="text-gray-200">=</span> <span className="text-gray-300">"Welcome to my portfolio";</span>
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-200">
                Hi all, I'm 
                <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"> Darbaz Rasull</span>
                <span className="inline-block animate-wave ml-2">👋</span>
              </h1>
            </div>

            {/* Terminal-style description */}
            <div className="bg-slate-800 rounded-lg p-3 sm:p-4 font-mono text-sm sm:text-base">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-4 h-4 text-teal-400" />
                <span className="text-teal-400">~/portfolio $</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                <span className="text-teal-400">&gt;</span> Mobile app engineer<br />
                <span className="inline-block ml-2">🚀</span><br />
                <span className="text-teal-400">&gt;</span> Specializing in modern web and mobile development
              </p>
            </div>

            {/* Tech stack */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-teal-400">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 rounded-lg font-mono text-xs sm:text-sm border border-slate-700 hover:border-teal-400 transition-colors duration-300 group"
                  >
                    <span className="mr-2">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className={`${link.bg} p-2 sm:p-3 rounded-lg transform hover:-translate-y-1 transition-all duration-300`}>
                    {link.icon}
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-2/5 max-w-sm sm:max-w-md lg:max-w-xl mt-8 lg:mt-0">
            <div className="relative group">
              {/* Code-like background pattern */}
              <div className="absolute inset-0 bg-slate-800 rounded-lg opacity-80">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="p-4 font-mono text-slate-700 text-xs sm:text-sm opacity-25 select-none">
                    {'{'}<br />
                    &nbsp;&nbsp;"developer": "Darbaz Rasull",<br />
                    &nbsp;&nbsp;"skills": ["frontend", "backend", "mobile"],<br />
                    &nbsp;&nbsp;"passion": "building amazing apps"<br />
                    {'}'}
                  </div>
                </div>
              </div>
              {/* Image container */}
              <div className="relative rounded-lg p-2 border border-slate-700 backdrop-blur-sm group-hover:border-teal-400 transition-colors duration-500">
                <img 
                  src="src/assets/h.jpg" 
                  alt="Darbaz Rasull"
                  className="rounded w-full h-auto mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
                {/* Matrix-like overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


