// Hamburger toggle
const ham  = document.getElementById('hamburger');
const menu = document.getElementById('mobile-menu');

if (ham && menu) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  if (nb) {
    nb.style.background = window.scrollY > 60
      ? 'rgba(5,13,26,.97)'
      : 'rgba(5,13,26,.8)';
  }
});
