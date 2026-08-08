const menu = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
menu?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
