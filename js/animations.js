document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("opacity-100", "scale-105");
      }
    });
  }, { threshold: 0.3 });

  timelineItems.forEach(item => observer.observe(item));
});
