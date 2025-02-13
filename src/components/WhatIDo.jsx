import React from 'react';
import { Zap } from 'lucide-react';

const WhatIDo = () => {
  const techStack = [
    { name: 'HTML5', icon: 'src/assets/html-5-svgrepo-com.svg' },
    { name: 'CSS3', icon: 'src/assets/css-3-svgrepo-com.svg' },
    { name: 'JavaScript', icon: '/src/assets/javascript-svgrepo-com.svg' },
    { name: 'React.js', icon: 'src/assets/react-svgrepo-com.svg' },
    { name: 'NPM', icon: 'src/assets/npm-svgrepo-com.svg' },
    { name: 'Tailwind', icon: 'src/assets/tailwind-svgrepo-com.svg' },
    { name: 'SQL Database', icon: 'src/assets/sql-svgrepo-com.svg' },
    { name: 'Firebase', icon: 'src/assets/firebase-svgrepo-com.svg' },
    { name: 'Flutter', icon: 'src/assets/flutter-svgrepo-com.svg' },
    { name: 'Laravel', icon: 'src/assets/laravel-svgrepo-com.svg' },
    { name: 'Dart', icon: 'src/assets/dart-svgrepo-com.svg' },
    { name: 'Node-js', icon: 'src/assets/node-js-svgrepo-com.svg' }
  ];

  const services = [
    {
      title: "Building interactive, high-performance Front-End/User Interfaces for web and mobile applications"
    },
    {
      title: "Developing Progressive Web Applications (PWA) with both traditional and Single Page Application (SPA) architectures"
    },
    {
      title: "Integrating third-party services such as Firebase, AWS, and DigitalOcean for enhanced functionality"
    }
  ];
  

  return (
    <section className="bg-slate-900 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="relative z-10">
              <div className="relative w-full">
                <div className="absolute top-4 sm:top-8 left-12 sm:left-20 bg-teal-400/20 p-2 sm:p-3 rounded-lg backdrop-blur-sm">
                  <span className="font-mono text-teal-400 text-sm sm:text-base">&lt;/&gt;</span>
                </div>
                <img
                  src="src/assets/stack.png"
                  alt="Developer Illustration"
                  className="w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-3 sm:mb-4">What I do</h2>
              <p className="text-lg sm:text-xl text-gray-400">
                I specialize in building interactive web and mobile applications with modern technologies. I can help you with
              </p>
            </div>

            {/* Tech Stack Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center justify-center p-3 sm:p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-teal-400 transition-colors duration-300"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs sm:text-sm text-gray-400 group-hover:text-teal-400 font-mono text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Services List */}
            <div className="space-y-3 sm:space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <div className="p-2 bg-slate-800 rounded-lg border border-slate-700 group-hover:border-teal-400 transition-colors shrink-0">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;