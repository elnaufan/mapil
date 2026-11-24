(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const body = document.body;

  const revealGroups = [
    ['.home-intro', 120],
    ['.page-grid', 240],
    ['.about .img', 100],
    ['.about-content h1', 180],
    ['.about-content h3', 260],
    ['.about-content p', 340],
    ['.social-icons', 420],
    ['.about-content > .btn', 500],
    ['.materi-isi h1', 160],
    ['.tugas-isi h1', 160],
    ['.materi-isi .btn', 280],
    ['.tugas-isi .btn', 280],
    ['.contact-heading', 140],
    ['.contact-form', 300],
    ['.site-footer', 520],
  ];

  body.classList.add('motion-ready');
  if (!reduceMotion) {
    revealGroups.forEach(([selector, delay]) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.classList.add('reveal');
        element.style.setProperty('--delay', `${delay}ms`);
      });
    });

    document
      .querySelectorAll(
        '.materi-isi .btn a, .tugas-isi .btn a, .contact-form .input-group, .contact-form .submit-btn, .page-card',
      )
      .forEach((element, index) => {
        element.classList.add('reveal');
        element.style.setProperty('--delay', `${360 + index * 75}ms`);
      });
  }
})();
