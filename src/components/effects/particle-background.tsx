
'use client';

import { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particlesArray: Particle[] = [];
    // Adjust particle count based on screen size for performance/density
    const getNumberOfParticles = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) return 50; // Fewer particles on small screens
      }
      return 100; // Default for larger screens
    };
    let numberOfParticles = getNumberOfParticles();


    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numberOfParticles = getNumberOfParticles(); // Recalculate on resize
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Original size: Math.random() * 3 + 1
        this.speedX = (Math.random() * 0.5 - 0.25) * 0.5; // Slower speed: Math.random() * 0.5 - 0.25
        this.speedY = (Math.random() * 0.5 - 0.25) * 0.5; // Slower speed
        // User's original colors:
        this.color = Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(147, 51, 234, 0.3)'; // Reduced alpha for subtlety
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.005; // Slower shrink rate

        // Boundary checks - bounce (considering particle size)
        if (this.x - this.size < 0 && this.speedX < 0) {
            this.speedX *= -1;
            this.x = this.size; // Prevent sticking
        } else if (this.x + this.size > canvas.width && this.speedX > 0) {
            this.speedX *= -1;
            this.x = canvas.width - this.size; // Prevent sticking
        }

        if (this.y - this.size < 0 && this.speedY < 0) {
            this.speedY *= -1;
            this.y = this.size; // Prevent sticking
        } else if (this.y + this.size > canvas.height && this.speedY > 0) {
            this.speedY *= -1;
            this.y = canvas.height - this.size; // Prevent sticking
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particlesArray.length = 0; // Clear existing particles
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animateParticles() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.1) { // Original: 0.2
          particlesArray.splice(i, 1);
          // Add a new particle to maintain count if needed
          if (particlesArray.length < numberOfParticles) {
             particlesArray.push(new Particle());
          }
          i--; 
        }
      }
      animationFrameId = requestAnimationFrame(animateParticles);
    }
    
    const handleResize = () => {
        setCanvasDimensions();
        initParticles(); 
    };

    setCanvasDimensions();
    initParticles();
    animateParticles();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      particlesArray.length = 0; 
    };
  }, []); 

  return null; 
};

export default ParticleBackground;
