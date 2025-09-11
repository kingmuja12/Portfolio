import React from 'react';
import { Mail, Linkedin, Github, ChevronDown, User } from 'lucide-react';

const Hero = ({ isLoaded, currentRole }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6 sm:mb-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 sm:mb-8">
              {/* Profile Image Container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  {/* Replace the User icon with your profile image */}
                  <div className="w-full h-full bg-cover bg-center"
                       style={{
                         backgroundImage: `url(${process.env.PUBLIC_URL}/mujeeb.png)`,
                         filter: 'grayscale(20%)'
                       }}>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-50 animate-pulse"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abdulmujeeb
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-4 sm:mb-6">
              <span className="text-gray-300">Abdulwaheed • </span>
              <span className="text-blue-400 transition-all duration-500">
                {currentRole}
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Building the future with AI, robotics, and human-centered technology. 
              Currently leading health monitoring innovations for first responders at RespAi.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
              <a href="mailto:abdulmujeeba@mun.ca" className="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Email
              </a>
              <a href="https://www.linkedin.com/in/abdulmujeeb-abdulwaheed-a40148296/" className="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                LinkedIn
              </a>
              <a href="https://github.com/kingmuja12" className="flex items-center gap-2 bg-gray-600/20 hover:bg-gray-600/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;
