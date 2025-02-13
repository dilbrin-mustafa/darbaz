import React from 'react';
import { Trophy, Award, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Advanced Scrum Master Certification",
      logo: "src/assets/c_1.png",
      description: "The Advanced Scrum Master Certification is designed for experienced Scrum Masters who want to deepen their understanding and enhance their skills in agile project management",
      links: [
        { label: "Certification", url: "#" },
      ]
    },
    {
      title: "Jira Software Cloud Certification",
      logo: "src/assets/c_2.png",
      description: "Completed Certification from Atlassian for Jira Software Cloud Certification",
      links: [
        { label: "View Google Assistant Action", url: "https://www.coursera.org/account/accomplishments/verify/WXZQML3SYDQM" }
      ]
    },
    {
      title: "Product Management Certification",
      logo: "src/assets/c_4.png",
      description: "Completed Certification from SMIT for Product Management",
      links: [
        { label: "Certification", url: "#" },
      ]
    },
    {
      title: "Flutter Development Certification", 
      logo: "src/assets/c_3.png",
      description: "Completed Certification from Google for Flutter Development",
      links: [
        { label: "Certification", url: "#" },
      ]
    },
    {
      title: "Hackathon Winner",
      logo: "src/assets/c_5.jpg",
      description: "Winner of the 2024 Global Hackathon for developing a mobile app that helps people find the best hiking trails in their area.",
      links: [
        { label: "Certification", url: "https://www.linkedin.com/in/darbaz-rasull-19375a252/details/certifications/" },
      ]
    },
    {
      title: "Google UX Design Professional Certificate",
      logo: "src/assets/c_6.jpg",
      description: "Get on the fast track to a career in UX design. In this certificate program, you’ll learn in-demand skills, and get AI training from Google experts.",
      links: [
        { label: "Certification", url: "https://www.coursera.org/professional-certificates/google-ux-design" },
     
      ]
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-5xl font-bold text-[#E6F1FF]">
            Achievements And Certifications
          </h2>
          <Trophy className="w-12 h-12 text-yellow-400 animate-bounce" />
        </div>
        
        <p className="text-xl text-[#8892B0] mb-16">
          ACHIEVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF THAT I HAVE DONE !
        </p>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group bg-[#112240] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Logo */}
              <div className="h-32 flex items-center justify-center mb-6">
                <img 
                  src={achievement.logo} 
                  alt={achievement.title}
                  className="max-h-full max-w-[80%] object-contain group-hover:transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#E6F1FF] text-center mb-4">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-[#8892B0] text-center mb-6">
                {achievement.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap justify-center gap-3">
                {achievement.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#233554] rounded-full text-sm text-[#64FFDA] 
                             hover:bg-[#64FFDA]/10 transition-colors duration-300 group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4 group-hover:transform group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#64FFDA] rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;