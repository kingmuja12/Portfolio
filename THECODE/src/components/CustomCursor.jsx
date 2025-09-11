import React, { useRef, useEffect } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  let requestRef = useRef(null);
  let previousTimeRef = useRef(null);

  useEffect(() => {
    let mousePosition = { x: 0, y: 0 };
    let currentPosition = { x: 0, y: 0 };
    const smoothFactor = 0.15; // Adjust for smoother/faster movement

    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        currentPosition.x += (mousePosition.x - currentPosition.x) * smoothFactor;
        currentPosition.y += (mousePosition.y - currentPosition.y) * smoothFactor;
        
        if (cursorDotRef.current && cursorRingRef.current) {
          cursorDotRef.current.style.transform = `translate3d(${currentPosition.x}px, ${currentPosition.y}px, 0) translate(-50%, -50%)`;
          cursorRingRef.current.style.transform = `translate3d(${currentPosition.x}px, ${currentPosition.y}px, 0) translate(-50%, -50%)`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;

      // Check if hovering over clickable elements
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const isPointer = element?.tagName === 'BUTTON' || 
                       element?.tagName === 'A' || 
                       getComputedStyle(element || document.body).cursor === 'pointer';

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform += ` scale(${isPointer ? 2 : 1})`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorDotRef}
        className="fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference bg-white"
        style={{ willChange: 'transform' }}
      />
      <div 
        ref={cursorRingRef}
        className="fixed w-8 h-8 rounded-full border border-white pointer-events-none z-50 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
