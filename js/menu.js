const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  mobileMenu.classList.toggle('active');
  mobileMenu.setAttribute('aria-hidden', expanded);
});

const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-menu');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
});
