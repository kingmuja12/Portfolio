import React from 'react';
import { Cpu, Brain, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Autonomous Underwater ROV",
      description: "Implemented color recognition with OpenCV and ROS2 for autonomous underwater tasks, boosting Eastern Edge Robotics' MATE ROV competition performance.",
      tech: ["Python", "C++", "OpenCV", "ROS2", "Gazebo"],
      icon: <Cpu className="w-4 h-4 sm:w-6 sm:h-6" />
    },
    {
      title: "AI Health Monitoring System",
      description: "Real-time biometric monitoring system for first responders with ML-driven early detection capabilities.",
      tech: ["IBM Watson", "ML", "Biometric Sensors", "Real-time Analytics"],
      icon: <Brain className="w-4 h-4 sm:w-6 sm:h-6" />
    },
    {
      title: "Online Ordering Platform",
      description: "Developed company's first online ordering platform to reduce in-person traffic and improve customer experience.",
      tech: ["Web Development", "Database Design", "System Integration"],
      icon: <Code className="w-4 h-4 sm:w-6 sm:h-6" />
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/10 h-full hover:border-purple-400/30 transition-all duration-300 hover:scale-[1.05] hover:bg-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-400">
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs">
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

export default Projects;
