import React, { useState } from 'react';
import { 
  Github, 
  Star, 
  ExternalLink, 
  Smartphone,
  Share2,
  Smartphone as GooglePlay,
  Apple,
  Settings2 as Settings
} from 'lucide-react';

const OpenSource = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "kurd_coders",
      description: "A feature-rich social networking app built with Flutter. Key features include real-time chat, story sharing, and location-based friend discovery.",
      category: "Flutter",
      platform: ["ios", "android"],
      techStack: ["Flutter", "Firebase", "Provider"],
      tags: ["social-media", "real-time", "messaging"],
      repoUrl: "https://github.com/darbazrasul/kurd_coders",
      playStoreUrl: "#",
      appStoreUrl: "#",
      lastUpdated: "3 days ago"
    },
    {
      title: "kurd_tree",
      description: " Kurd Tree is a mobile app that allows users to securely link their social media accounts and other online services under one unified identity, focusing on privacy and security.",
      category: "flutter",
      platform: ["ios", "android"],
      techStack: ["Flutter", "GetX", "Firebase"],
      tags: ["Pofile"],
      repoUrl: "https://github.com/darbazrasul/kurd_tree",
      playStoreUrl: "#",
      appStoreUrl: "#",
      lastUpdated: "1 week ago"
    },
    {
      title: "weather_app",
      description: "A complete fitness and health tracking app that offers workout plans, progress tracking, and integrates with health APIs. Includes social features to share achievements with friends.",
      category: "Flutter",
      platform: ["ios", "android"],
      techStack: ["Flutter", "Firebase", "GetX"],
      tags: ["fitness", "health", "tracking"],
      repoUrl: "https://github.com/darbazrasul/weather_app",
      playStoreUrl: "#",
      appStoreUrl: "#",
      lastUpdated: "5 days ago"
    },
    {
      title: "School Management System",
      description: "A comprehensive school management system app designed to streamline administrative tasks such as scheduling, attendance tracking, and communication with students and parents. Integrates with various educational tools for seamless management.",
      category: "Flutter",
      platform: ["ios", "android"],
      techStack: ["Flutter", "Firebase", "GetX"],
      tags: ["fitness", "health", "tracking"],
      repoUrl: "https://github.com/darbazrasul/teacher_school",
      playStoreUrl: "#",
      appStoreUrl: "#",
      lastUpdated: "5 days ago"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Apps' },
    { id: 'react-native', label: 'React Native' },
    { id: 'flutter', label: 'Flutter' },
    { id: 'native', label: 'Native (iOS/Android)' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="opensource" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white relative">
              Mobile Apps
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-teal-400"></span>
            </h2>
            <Smartphone className="w-12 h-12 text-teal-400" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            Open source mobile applications built with modern frameworks and best practices. 
            Available on both iOS and Android platforms.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-teal-400 text-slate-900 font-medium'
                  : 'bg-slate-800 text-gray-400 hover:text-teal-400'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-xl p-8 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-8 h-8 text-teal-400" />
                  <div className="flex gap-2">
                    {project.platform.includes('android') && (
                      <GooglePlay className="w-5 h-5 text-gray-400" />
                    )}
                    {project.platform.includes('ios') && (
                      <Apple className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-4 h-4 text-teal-400" />
                  <span className="text-sm text-gray-400">Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-slate-900 rounded-full text-xs font-mono text-teal-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags and Last Updated */}
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-slate-900 rounded-full text-xs font-mono text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
                <span className="ml-auto text-xs text-gray-400 flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  {project.lastUpdated}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;