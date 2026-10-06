const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

menuButton.addEventListener('click', function () {
   nav.classList.toggle('open');
});
