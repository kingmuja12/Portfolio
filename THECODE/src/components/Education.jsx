import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Education & Achievements
        </h2>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Bachelor of Engineering: Computer Engineering</h3>
              <p className="text-blue-400 text-sm sm:text-base">Memorial University of Newfoundland</p>
              <p className="text-gray-400 text-sm">April 2023 – January 2028 • St. John's, Canada</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-3 sm:p-4 rounded-lg">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mb-2" />
              <h4 className="font-bold text-yellow-400 text-sm sm:text-base">Top 10 Science Student</h4>
              <p className="text-xs sm:text-sm text-gray-300">INTERSWITCH SPARK 3.0 (2021–2022)</p>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 p-3 sm:p-4 rounded-lg">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-2" />
              <h4 className="font-bold text-green-400 text-sm sm:text-base">Verafin Scholarship</h4>
              <p className="text-xs sm:text-sm text-gray-300">Computer Engineering Scholarship (2024)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
