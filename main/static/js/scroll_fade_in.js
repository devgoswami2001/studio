
document.addEventListener('DOMContentLoaded', () => {
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

  // No explicit cleanup needed for this simple observer on page load/unload
  // If elements were dynamically added/removed, unobserve would be important.
});
