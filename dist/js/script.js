const hamurger = document.querySelector('.hamurger'),
    menu = document.querySelector('.menu'),
    closeMenu = document.querySelector('.menu__close');

hamurger.addEventListener('click', () => {
    menu.classList.add('active');
});


closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});
