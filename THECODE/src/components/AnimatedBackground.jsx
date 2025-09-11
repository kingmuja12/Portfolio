import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
