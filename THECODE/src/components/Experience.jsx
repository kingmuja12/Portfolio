import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "CTO & Co-Founder",
      company: "RespAi",
      period: "March 2025 – Present",
      location: "St John's, Canada",
      description: "Leading AI-driven health monitoring for first responders using real-time biometric wearables and ML models trained on medical datasets.",
      tech: ["IBM Watson Studio", "ML", "LLM Architecture", "Biometric Sensors"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Assembly Engineer Intern",
      company: "Avalon Holographics",
      period: "January 2025 – April 2025", 
      location: "St.John's, Canada",
      description: "Implemented tracking systems and optimized assembly workflows while testing holographic hardware components.",
      tech: ["Hardware Testing", "Excel", "System Optimization"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "CTO & Co-Founder", 
      company: "Dynai",
      period: "January 2024 – March 2025",
      location: "St John's, Canada", 
      description: "Built human-centered AI using GPT-4, vector storage, and LangChain to reduce social isolation through smarter daily interactions.",
      tech: ["GPT-4", "LangChain", "Vector Storage", "Raspberry Pi", "3D Printing"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-start gap-4 mb-4 sm:mb-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex-shrink-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className={`text-base sm:text-lg lg:text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                        {exp.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4">
                        <span>{exp.period}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 sm:px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
