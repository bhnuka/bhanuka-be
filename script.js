const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

const hero = document.querySelector(".hero");
if (hero) {
  hero.classList.add("visible");
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const tiltTargets = document.querySelectorAll(".hero-card, .highlight");

  window.addEventListener("mousemove", (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 6;
    const y = (event.clientY / innerHeight - 0.5) * 6;
    tiltTargets.forEach((card) => {
      card.style.transform = `rotateX(${y * -1}deg) rotateY(${x}deg)`;
    });
  });

  window.addEventListener("mouseleave", () => {
    tiltTargets.forEach((card) => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
}
