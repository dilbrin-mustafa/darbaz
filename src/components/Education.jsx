import React from 'react';
import { Calendar, Award, BookOpen, ExternalLink } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      logo: "/src/assets/university_of_zakho.webp",
      university: "University of zakho",
      degree: "Bachelor of Science in Computer Science",
      duration: "September 2020 - April 2024",
      gpa: "3.6/4.0",
      description: "Specializing in advanced software engineering, with a focus on distributed systems and cutting-edge technologies.",
      courses: [
        "Advanced Algorithms",
        "Machine Learning",
        "Artificial Intelligence (AI)",
        "Deep Learning",
        "Cloud Computing"
      ],
      achievements: [
        "Published research on distributed systems, contributing to the field’s understanding of scalable architectures.",
        "Led a student research group focused on AI and Machine Learning, mentoring peers in developing innovative solutions."
      ]
    },
    {
      logo: "src/assets/bazine.jpg",
      university: "Bazine high school",
      degree: "High School Diploma",
      duration: "September 2017 - April 2019",
      gpa: "86/100",
      description: "Graduated with honors, excelling in mathematics and computer science courses.",
      courses: ["Calculus", "Physics", "Computer Science", "Statistics"],
      achievements: [
        "Awarded first place in the regional mathematics competition, showcasing problem-solving skills and analytical thinking.",
        "one of the top students in the class"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-teal-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
              Educational Journey
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 
                         hover:border-teal-400/50 transition-all duration-300 
                         transform hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                {/* Logo */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 border-slate-700 
                               group-hover:border-teal-400 transition-colors duration-300 
                               overflow-hidden p-2 bg-white/5 backdrop-blur-sm">
                  <img
                    src={edu.logo}
                    alt={`${edu.university} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title Info */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-1">
                    {edu.university}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">{edu.duration}</span>
                  </div>
                </div>
              </div>

              {/* Degree & GPA */}
              <div className="mb-4">
                <h4 className="text-lg text-teal-400 font-mono mb-1">
                  {edu.degree}
                </h4>
                <span className="text-gray-300 text-sm font-mono">
                  GPA: {edu.gpa}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {edu.description}
              </p>

              {/* Key Courses */}
              <div className="mb-4">
                <h5 className="text-gray-200 font-semibold mb-2">Key Courses</h5>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h5 className="text-gray-200 font-semibold mb-2">Achievements</h5>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <Award className="w-4 h-4 mt-0.5 text-teal-400 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View More Button */}
              <button className="mt-6 w-full py-2 px-4 border border-teal-400/30 rounded-lg
                               text-teal-400 text-sm font-medium
                               hover:bg-teal-400/10 transition-colors duration-300
                               flex items-center justify-center gap-2">
                View Details
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;