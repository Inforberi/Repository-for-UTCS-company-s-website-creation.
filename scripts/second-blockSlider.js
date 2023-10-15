'use strict';

const arrowLeft = document.querySelector('.our-mission__arrow-left');
const arrowRight = document.querySelector('.our-mission__arrow-right');
const allCards = document.querySelector('.our-mission__all-cards-container');
const card = document.querySelector('.our-mission__card');
const cards = document.querySelectorAll('.our-mission__card');

let currentIndex = 0;

// length of cards
const cardLength = cards.length;

// width a card
let widthCard;

// gap
let gapCard;

// slider function
const slideCards = () => {
    //find width a card with gap
    const finallCalc =
        currentIndex * (parseFloat(widthCard) + parseFloat(gapCard));

    // move
    allCards.style.transform = `translateX(-${finallCalc}px)`;

    // style
    allCards.style.transition = 'transform .8s ease';
};

const prevslide = () => {
    currentIndex === 0 ? (currentIndex = cardLength - 3) : currentIndex--;
    slideCards();
};

const nextSlide = () => {
    currentIndex === cardLength - 3 ? (currentIndex = 0) : currentIndex++;
    slideCards();
};

arrowLeft.addEventListener('click', prevslide);
arrowRight.addEventListener('click', nextSlide);

const updateCardWidthMission = () => {
    // width a card

    const stylesCard = window.getComputedStyle(card);
    widthCard = stylesCard.getPropertyValue('width');

    // gap

    const stylesAllCard = window.getComputedStyle(allCards);
    gapCard = stylesAllCard.getPropertyValue('gap');

    slideCards();
    updateArrowStyles();
};

const updateArrowStyles = () => {
    if (window.innerWidth <= 980 && window.innerWidth > 435) {
        // arrow fill left
        arrowLeft.addEventListener('click', () => {
            setTimeout(() => {
                arrowLeft.style.backgroundImage =
                    "url('/images/arrow/arrow-left-small.svg')";
            }, 450);
            arrowLeft.style.backgroundImage =
                "url('/images/arrow/arrow-left-fill-small.svg')";
            arrowLeft.style.transition = '.4s ease';
            arrowLeft.style.transition = '-webkit-transform .4s ease';
        });
        // arrow fill right
        arrowRight.addEventListener('click', () => {
            setTimeout(() => {
                arrowRight.style.backgroundImage =
                    "url('/images/arrow/arrow-right-small.svg')";
            }, 450);
            arrowRight.style.backgroundImage =
                "url('/images/arrow/arrow-right-fill-small.svg')";
            arrowRight.style.transition = '.4s ease';
            arrowRight.style.transition = '-webkit-transform .4s ease';
        });
    } else if (window.innerWidth <= 435) {
        // arrow fill left
        arrowLeft.addEventListener('click', () => {
            setTimeout(() => {
                arrowLeft.style.backgroundImage =
                    "url('/images/second-block/arrow-left.svg')";
            }, 450);
            arrowLeft.style.backgroundImage =
                "url('/images/second-block/arrow-fill-left.svg')";
            arrowLeft.style.transition = '.4s ease';
            arrowLeft.style.transition = '-webkit-transform .4s ease';
        });

        // arrow fill right
        arrowRight.addEventListener('click', () => {
            setTimeout(() => {
                arrowRight.style.backgroundImage =
                    "url('/images/second-block/arrow-right.svg')";
            }, 450);
            arrowRight.style.backgroundImage =
                "url('/images/second-block/arrow-fill-right.svg')";
            arrowRight.style.transition = '.4s ease';
            arrowRight.style.transition = '-webkit-transform .4s ease';
        });
    }
};

updateArrowStyles();
updateCardWidthMission();

if (window.innerWidth <= 980) {
    touchMove(allCards, nextSlide, prevslide);
}

window.addEventListener('load', updateCardWidthMission);
window.addEventListener('resize', updateCardWidthMission);
