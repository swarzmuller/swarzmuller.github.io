
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', function () {
    menu.classList.add('active');
    overlay.classList.add('active');
});

document.addEventListener('click', function (e) {
    const target = e.target;
    if (target.classList.contains('menu__close') || target.classList.contains('overlay')) {
       menu.classList.remove('active');
       overlay.classList.remove('active');
   }
});
