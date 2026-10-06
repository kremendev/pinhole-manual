const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

menuButton.addEventListener('click', () => {
   const isOpen = nav.classList.toggle('is-open');
   menuButton.setAttribute('aria-expanded', isOpen);
});
