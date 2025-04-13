const hiddenSections = document.querySelectorAll('.hidden-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, {
  threshold: 0.2
});

hiddenSections.forEach(section => observer.observe(section));

