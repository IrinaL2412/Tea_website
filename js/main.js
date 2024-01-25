const burger = document.querySelector('.burger');
const menuClose = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const bgMenuOpen = document.querySelector('.bg-menu--open');

burger.addEventListener('click', function () {
    menu.classList.toggle('menu--open');
    bgMenuOpen.classList.toggle('menu--open');
});

menuClose.addEventListener('click', function () {
    menu.classList.remove('menu--open');
    bgMenuOpen.classList.remove('menu--open');
});