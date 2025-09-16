import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, Code, Brain, Cpu, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    { name: 'Python', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'C/C++', level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'AI/ML', level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'Hardware', level: 80, color: 'from-orange-500 to-red-500' },
    { name: 'Flutter', level: 75, color: 'from-indigo-500 to-blue-500' },
    { name: 'Databases', level: 82, color: 'from-yellow-500 to-orange-500' }
  ];

  const experiences = [
    {
      title: 'CTO & Co-Founder',
      company: 'RespAi',
      period: 'March 2025 – Present',
      location: 'St John\'s, Canada',
      description: 'Leading AI-driven health monitoring for first responders using ML models and biometric wearables.',
      tech: ['IBM Watson', 'ML', 'LLM', 'Healthcare AI'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Assembly Engineer Intern',
      company: 'Avalon Holographics',
      period: 'January 2025 – April 2025',
      location: 'St.John\'s, Canada',
      description: 'Implemented tracking systems and optimized assembly workflows for hardware/software integration.',
      tech: ['Excel', 'Hardware Testing', 'System Integration'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Project Manager Intern',
      company: 'Western Pacific Enterprises',
      period: 'April 2024 – August 2024',
      location: 'Surrey, Canada',
      description: 'Automated tracking systems using Python and AI to optimize vendor communication workflows.',
      tech: ['Python', 'AI Automation', 'Bluebeam', 'Excel'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'CTO & Co-Founder',
      company: 'Dynai',
      period: 'January 2024 – March 2025',
      location: 'St John\'s, Canada',
      description: 'Built human-centered AI using GPT-4 and LangChain to reduce social isolation.',
      tech: ['GPT-4', 'LangChain', 'Raspberry Pi', '3D Printing'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const projects = [
    {
      title: 'Autonomous Underwater ROV',
      description: 'Implemented color recognition with OpenCV and ROS2 communication for MATE ROV competition',
      tech: ['Python', 'C++', 'OpenCV', 'ROS2', 'Gazebo'],
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Abdulmujeeb
          </div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-1 animate-spin-slow">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <Code className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Abdulmujeeb
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            Computer Engineering Student & AI Innovator
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>St. John's, Canada</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-purple-400" />
              <span>CGPA: 3.61/4.00</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:abdulmujeeba@mun.ca" className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com" className="bg-gradient-to-r from-gray-700 to-gray-900 p-3 rounded-full hover:scale-110 transition-transform duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="tel:+17096853386" className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Computer Engineering student at Memorial University of Newfoundland with a strong focus on AI innovation and entrepreneurship. As a CTO and Co-Founder of multiple startups, I combine technical expertise with leadership skills to create impactful solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-cyan-400 mb-2">Education</h4>
                  <p className="text-sm text-gray-300">Memorial University of Newfoundland</p>
                  <p className="text-sm text-gray-400">Computer Engineering</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-purple-400 mb-2">Awards</h4>
                  <p className="text-sm text-gray-300">Verafin Scholarship</p>
                  <p className="text-sm text-gray-400">Top 10 INTERSWITCH SPARK 3.0</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Core Interests
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {['AI & Machine Learning', 'Robotics', 'Hardware Design', 'Entrepreneurship'].map((interest, index) => (
                  <div key={interest} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <Brain className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`p-4 rounded-lg transition-all duration-500 ${
                    currentSkill === index ? 'bg-white/10 scale-105 border border-white/20' : 'bg-white/5'
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                      style={{
                        width: currentSkill === index ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="font-semibold text-cyan-400 mb-4">Languages & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'Python', 'Dart', 'MATLAB', 'C/C++', 'Flutter'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="font-semibold text-purple-400 mb-4">Databases & Cloud</h4>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'SQLite', 'MongoDB', 'Firebase', 'AWS', 'Pinecone'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="font-semibold text-pink-400 mb-4">Hardware & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Arduino', 'Raspberry Pi', 'RISC-V', '3D Printing', 'Soldering', 'KiCad'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, or collaboration possibilities. Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:abdulmujeeba@mun.ca"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 group"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-200">abdulmujeeba@mun.ca</p>
            </a>
            
            <a
              href="tel:+17096853386"
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 group"
            >
              <Phone className="w-8 h-8 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-200">(709) 685-3386</p>
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com"
              className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10 relative z-10">
        <p>&copy; 2025 Abdulmujeeb Abdulwaheed. Crafted with passion and innovation.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
