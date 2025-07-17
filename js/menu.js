const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  navList.classList.toggle('active');
});
