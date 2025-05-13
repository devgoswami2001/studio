
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('cursor-trail-canvas');
  if (!canvas) {
    console.warn('Cursor trail canvas not found');
    return;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let trails = [];

  const setCanvasDimensions = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  setCanvasDimensions();

  const handleMouseMove = (e) => {
    trails.push({
      x: e.clientX,
      y: e.clientY,
      size: 10, // Initial size
      alpha: 1, // Initial opacity
      color: Math.random() > 0.5 ? 'rgba(0, 188, 212, 0.5)' : 'rgba(26, 35, 126, 0.3)', // Teal and Deep Blue
    });
    if (trails.length > 25) trails.shift(); // Limit trail length
  };

  document.addEventListener('mousemove', handleMouseMove);

  let animationFrameId = null;
  const animateTrail = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trails.forEach((trail, index) => {
      ctx.beginPath();
      ctx.arc(trail.x, trail.y, trail.size, 0, Math.PI * 2);
      ctx.fillStyle = trail.color;
      ctx.globalAlpha = trail.alpha;
      ctx.fill();
      trail.size *= 0.94; // Shrink rate
      trail.alpha *= 0.93; // Fade rate
      if (trail.alpha < 0.05) { // Remove when almost invisible
        trails.splice(index, 1);
      }
    });
    animationFrameId = requestAnimationFrame(animateTrail);
  };
  animateTrail();

  const handleResize = () => {
    setCanvasDimensions();
  };
  window.addEventListener('resize', handleResize);

  // Cleanup (though less critical in vanilla JS without component lifecycle)
  // If this script were part of a larger SPA-like structure, more robust cleanup would be needed.
  // For a simple page load, browser handles most of it.
});
