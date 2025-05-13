
'use client';

import { useEffect } from 'react';

const ScrollFadeIn = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after animation to save resources
            // observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const elementsToObserve = document.querySelectorAll('.fade-in');
    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return null; // This component does not render anything itself
};

export default ScrollFadeIn;
