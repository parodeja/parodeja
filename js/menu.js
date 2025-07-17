const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-menu');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
});
