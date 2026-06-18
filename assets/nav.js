// Sticky-TOC active-section highlighter using IntersectionObserver.
(function () {
  const sections = Array.from(document.querySelectorAll(".content > section[id]"));
  const links = new Map(
    Array.from(document.querySelectorAll(".toc a[href^='#']"))
      .map(a => [a.getAttribute("href").slice(1), a])
  );
  if (!sections.length || !links.size) return;

  const setActive = (id) => {
    links.forEach((a, key) => a.classList.toggle("is-active", key === id));
  };

  const io = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
    if (visible.length) {
      setActive(visible[0].target.id);
    }
  }, {
    rootMargin: "-30% 0px -55% 0px",
    threshold: 0,
  });

  sections.forEach(s => io.observe(s));
})();
