const hamurger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeMenu = document.querySelector('.menu__close')
    ;

hamurger.addEventListener('click', () => {
    menu.classList.add('active');
});


closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__rating-counter'),
    lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach((items, i) => {
    lines[i].style.width = items.innerHTML;
});
