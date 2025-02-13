import React, { useEffect, useState } from 'react';
import { Code2, Database, Terminal, Brain, Rocket, Coffee } from 'lucide-react';

const Proficiency = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('proficiency-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = [
    {
      name: 'Frontend/Design',
      percentage: 90,
      icon: <Code2 className="w-6 h-6" />,
      color: 'from-violet-500 to-purple-500',
      description: 'Expertise in React, Flutter, and modern UI frameworks'
    },
    {
      name: 'Backend',
      percentage: 85,
      icon: <Database className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Strong foundation in Node.js, Laravel, and database management'
    },
    {
      name: 'Programming',
      percentage: 80,
      icon: <Terminal className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-500',
      description: 'Proficient in multiple programming languages and paradigms'
    }
  ];

  const additionalSkills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Strong analytical and debugging skills'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Dedicated',
      description: 'Committed to delivering quality results'
    }
  ];

  return (
    <section id="proficiency-section" className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Technical Proficiency
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Skills Progress Bars */}
          <div className="space-y-8">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-slate-800 rounded-lg text-teal-400 ring-1 ring-slate-700/50">
                    {skill.icon}
                  </div>
                  <h3 className="text-gray-100 text-lg font-semibold">{skill.name}</h3>
                  <span className="ml-auto text-gray-400 font-mono">
                    {skill.percentage}%
                  </span>
                </div>

                <div className="h-3 bg-slate-800 rounded-full overflow-hidden ring-1 ring-slate-700/50">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}
                               transition-all duration-1000 ease-out transform origin-left
                               ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <div className="w-full h-full bg-white/10 backdrop-blur-sm" />
                  </div>
                </div>

                {/* Tooltip */}
                <div 
                  className={`absolute -top-16 left-1/2 transform -translate-x-1/2 
                             bg-slate-800 text-gray-100 p-3 rounded-lg shadow-xl 
                             transition-all duration-200 z-10 w-64 text-sm
                             ${hoveredSkill === skill.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                  {skill.description}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Cards */}
          <div className="grid gap-6">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 bg-slate-800 rounded-lg border border-slate-700/50 
                           transform hover:-translate-y-1 transition-all duration-300
                           hover:border-teal-400/50 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-900/50 rounded-lg text-teal-400 
                                group-hover:text-teal-300 transition-colors">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-100 font-semibold mb-2">{skill.title}</h4>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center">
          <div className="inline-block p-6 bg-slate-800 rounded-lg border border-slate-700/50">
            <p className="text-gray-400 font-mono text-sm">
              "Always learning, always growing, always coding 🚀"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proficiency;