const servicesLeftBtn = document.querySelector('.our-services__arrow-left');
const servicesRightBtn = document.querySelector('.our-services__arrow-right');
const servicesCards = document.querySelector('.our-services__all-card');
const servicesCard = document.querySelector('.our-services__card');

let currentIndexServices = 0;

// сколько карточек всего

const allServicesCard = document.querySelectorAll('.our-services__card').length;

// width a card

let parseWidthServicesCard;
// width a gap
let parseGapServicesCard;

// slider function

const servicesSlider = () => {
    const finallCalc =
        currentIndexServices * (parseWidthServicesCard + parseGapServicesCard);

    if (window.innerWidth > 980) {
        servicesCards.style.transform = '';
    } else {
        servicesCards.style.transform = `translateX(-${finallCalc}px)`;
        servicesCards.style.transition = 'transform .8s ease';
    }
};

const servicesBtnLeft = () => {
    if (window.innerWidth > 435) {
        currentIndexServices === 0
            ? (currentIndexServices = allServicesCard - 2)
            : currentIndexServices--;
    } else {
        currentIndexServices === 0
            ? (currentIndexServices = allServicesCard - 1)
            : currentIndexServices--;
    }

    servicesSlider();
};

const servicesBtnRight = () => {
    if (window.innerWidth > 435) {
        currentIndexServices === allServicesCard - 2
            ? (currentIndexServices = 0)
            : currentIndexServices++;
    } else {
        currentIndexServices === allServicesCard - 1
            ? (currentIndexServices = 0)
            : currentIndexServices++;
    }

    servicesSlider();
};

servicesLeftBtn.addEventListener('click', servicesBtnLeft);
servicesRightBtn.addEventListener('click', servicesBtnRight);

const updateCardWidthServices = () => {
    // width a card
    const styleServicesCard = window.getComputedStyle(servicesCard);
    const widthServicesCard = styleServicesCard.getPropertyValue('width');
    parseWidthServicesCard = parseFloat(widthServicesCard);

    // width a gap
    const styleServicesCards = window.getComputedStyle(servicesCards);
    const gapServicesCard = styleServicesCards.getPropertyValue('gap');
    parseGapServicesCard = parseFloat(gapServicesCard);

    servicesSlider();
    upgradeServicesArrow();
};

if (window.innerWidth <= 980) {
    touchMove(servicesCards, servicesBtnRight, servicesBtnLeft);
}

const upgradeServicesArrow = () => {
    if (window.innerWidth <= 980 && window.innerWidth > 435) {
        touchMove(servicesCards, servicesBtnRight, servicesBtnLeft);

        // arrow fill left
        servicesLeftBtn.addEventListener('click', () => {
            setTimeout(() => {
                servicesLeftBtn.style.backgroundImage =
                    "url('/images/arrow/arrow-left-small.svg')";
            }, 450);
            servicesLeftBtn.style.backgroundImage =
                "url('/images/arrow/arrow-left-fill-small.svg')";
            servicesLeftBtn.style.transition = '.4s ease';
            servicesLeftBtn.style.transition = '-webkit-transform .4s ease';
        });
        // arrow fill right
        servicesRightBtn.addEventListener('click', () => {
            setTimeout(() => {
                servicesRightBtn.style.backgroundImage =
                    "url('/images/arrow/arrow-right-small.svg')";
            }, 450);
            servicesRightBtn.style.backgroundImage =
                "url('/images/arrow/arrow-right-fill-small.svg')";
            servicesRightBtn.style.transition = '.4s ease';
            servicesRightBtn.style.transition = '-webkit-transform .4s ease';
        });
    } else if (window.innerWidth <= 435) {
        // arrow fill left
        servicesLeftBtn.addEventListener('click', () => {
            setTimeout(() => {
                servicesLeftBtn.style.backgroundImage =
                    "url('/images/second-block/arrow-left.svg')";
            }, 450);
            servicesLeftBtn.style.backgroundImage =
                "url('/images/second-block/arrow-fill-left.svg')";
            servicesLeftBtn.style.transition = '.4s ease';
            servicesLeftBtn.style.transition = '-webkit-transform .4s ease';
        });
        // arrow fill right
        servicesRightBtn.addEventListener('click', () => {
            setTimeout(() => {
                servicesRightBtn.style.backgroundImage =
                    "url('/images/second-block/arrow-right.svg')";
            }, 450);
            servicesRightBtn.style.backgroundImage =
                "url('/images/second-block/arrow-fill-right.svg')";
            servicesRightBtn.style.transition = '.4s ease';
            servicesRightBtn.style.transition = '-webkit-transform .4s ease';
        });
    }
};

upgradeServicesArrow();
updateCardWidthServices();

window.addEventListener('load', updateCardWidthServices);
window.addEventListener('resize', updateCardWidthServices);
