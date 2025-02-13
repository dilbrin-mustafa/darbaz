import React from 'react';
import { Calendar, Building2, ChevronRight, ArrowUpRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Nova Saz Solutions",
      logo:"src/assets/nova.jpg",
      position: "Co-Founder & CTO",
      period: "June 2023 – Present",
      colorClass: "bg-gradient-to-r from-blue-600 to-blue-400",
      description: " Leading a team of developers to build innovative software solutions for clients worldwide.",
      points: [
        "Developed a custom CRM system for a Fortune 500 client, increasing efficiency by 30%",
        "Managed a team of 10 developers for a high-profile project"
      ]
    },
    {
      company: "Shahan Company",
      logo:"src/assets/shahan.jpg",
      position: "Software Engineer",
      period: "June 2024 – Present",
      colorClass: "bg-gradient-to-r from-blue-600 to-blue-400",
      description: "Leading development of core features and optimizing performance for the main Shahan application platform.",
      points: [
        "Spearheaded performance optimization initiatives resulting in 40% improvement",
        "Mobile App Development"
      ]
    },
    {
      company: "Lelav Software",
      logo:"src/assets/lelav.jpg",
      position: "Mobile Developer , Ui/Ux Designer",
      period: "Jan 2015 – Sep 2015",
      colorClass: "bg-gradient-to-r from-pink-600 to-pink-400",
      description: "Developed new features and improved the user experience of a popular travel booking platform.",
      points: [
        "Led a team of 5 developers to implement a new feature that increased user retention by 20%.",
        "Collaborated with the design team to create a more intuitive user interface, resulting in a 15% increase in bookings."
      ]
    },
    {
      company: "Z Tech",
      logo:"src/assets/ztech.png",
      position: "Software developer",
      period: "June 2018 – Present",
      colorClass: "bg-gradient-to-r from-blue-600 to-blue-400",
      description: "Currently working on optimizing the performance of a popular shopping mobile app, delivering seamless user experiences.",
      points: [
        "Spearheaded performance optimization initiatives, resulting in a 40% improvement in app speed and responsiveness.",
        "Collaborated closely with cross-functional teams to enhance load times, streamline navigation, and reduce crashes, improving overall user satisfaction.",
      ]
    },
    {
      company: "Yona Dev",
      logo:"src/assets/yonadev.jpg",
      position: "Front-End Developer",
      period: "May 2022 – May 2023",
      colorClass: "bg-gradient-to-r from-red-600 to-red-400",
   
        description: "Developed and enhanced front-end components for a school management system, focusing on user experience, accessibility, and efficient workflows.",
        points: [
          "Implemented responsive design patterns across the platform to ensure accessibility on all devices, from desktops to mobile phones.",
          "Collaborated with cross-functional teams to integrate features like real-time notifications, course scheduling, and attendance tracking."
        ]
  
      
    },
    {
      company: "Wardil Organization",
      logo: "src/assets/yonadev.jpg",
      position: "IT Support Specialist",
      period: "Sept 2024 – Present",
      colorClass: "bg-gradient-to-r from-red-600 to-red-400",
      description: "Providing IT support and technical solutions to ensure the smooth operation of Wardil Organization’s systems and infrastructure.",
      points: [
        "Troubleshooted and resolved hardware and software issues for staff, ensuring minimal downtime and increased productivity.",
        "Maintained and updated systems and networks, ensuring the security and integrity of organizational data.",
        "Assisted in the installation and configuration of IT infrastructure, including workstations, software, and networking equipment.",
      ]
      
    },

  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-blue-500"></div>
            <span className="text-blue-500 font-semibold">CAREER PATH</span>
          </div>
          <h2 className="text-5xl font-bold text-white">Experience</h2>
        </div>
        
        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50"
            >
              {/* Top Banner */}
              <div className={`h-2 ${exp.colorClass}`} />
              
              {/* Content */}
              <div className="p-8">
                {/* Logo Circle */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-700/50 backdrop-blur-sm flex items-center justify-center">
                    <img 
                      src={`${exp.logo}`}
                      alt={`${exp.company} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                {/* Title Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center group-hover:text-blue-400 transition-colors">
                    {exp.position}
                    <ArrowUpRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 mb-6 line-clamp-3">
                  {exp.description}
                </p>

                {/* Achievement Points */}
                {exp.points && (
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <ChevronRight className="w-5 h-5 mt-0.5 text-blue-400 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/20 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;