const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuBtn = document.querySelector('.burger-menu-button');
const burgerMenuCrossBtn = document.querySelector('.burger-menu__cross');
const body = document.body;
const burgerMenuContainer = document.querySelector('.burger-menu__container');
const burgerMenuNav = document.querySelectorAll('.burger-menu__list-item');

let flagSetTimeOut = false;

const btnHandler = () => {
    burgerMenu.classList.remove('hidden');

    body.style.overflow = 'hidden';
    burgerMenuContainer.style.overflowY = 'scroll';
};

burgerMenuBtn.addEventListener('click', btnHandler);

const closeBurgerMenu = () => {
    // time out for animation
    setTimeout(() => {
        burgerMenu.classList.add('hidden');
        burgerMenuContainer.style.marginRight = '0';
        flagSetTimeOut = true;
    }, 500);

    // animation of close
    burgerMenuContainer.style.marginRight = '-100%';
    burgerMenuContainer.style.transition = '1.5s ease';

    body.style.overflow = 'auto';
};

if (!flagSetTimeOut) {
    //closing a form when clicking outside it
    document.addEventListener('click', function (e) {
        if (!burgerMenu.contains(e.target) && !burgerMenuBtn.contains(e.target))
            closeBurgerMenu();
    });
    // tap on cross
    burgerMenuCrossBtn.addEventListener('click', closeBurgerMenu);
}

burgerMenuNav.forEach((nav) => {
    nav.addEventListener('click', closeBurgerMenu);
});

burgerMenuBtn.addEventListener('click', btnHandler);

// close put on button
document
    .querySelector('.burger-menu__box-button')
    .addEventListener('click', closeBurgerMenu);

// resize and load page

window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
        burgerMenu.classList.add('hidden');
        body.style.overflow = 'auto';
    }
});
window.addEventListener('load', () => {
    if (window.innerWidth > 980) {
        burgerMenu.classList.add('hidden');
        body.style.overflow = 'auto';
    }
});
