const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggle.setAttribute('aria-expanded', menu.classList.contains('active'));
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  toggle.setAttribute('aria-expanded', 'false');
});
