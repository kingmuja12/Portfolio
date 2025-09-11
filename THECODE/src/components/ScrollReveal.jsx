import React, { useEffect, useRef } from 'react';

const ScrollReveal = ({ children, delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      elementRef.current.classList.add('fade-up');
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
};

export default ScrollReveal;
