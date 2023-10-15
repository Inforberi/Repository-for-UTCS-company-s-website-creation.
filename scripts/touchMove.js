// слайдер косанием пальца
const touchMove = function (cardsNameContainer, functionRight, functionLeft) {
    let touchStartX = 0;
    let touchEndX = 0;
    let isTouchMoving = false;

    cardsNameContainer.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
        isTouchMoving = false; // Сбрасываем состояние при начале касания
    });

    cardsNameContainer.addEventListener('touchmove', (event) => {
        touchEndX = event.touches[0].clientX;
        isTouchMoving = true; // Устанавливаем состояние "движение"
    });

    cardsNameContainer.addEventListener('touchend', () => {
        if (isTouchMoving) {
            const touchDiff = touchStartX - touchEndX;
            const sensitivity = 30;

            if (touchDiff > sensitivity) {
                functionRight();
            } else if (touchDiff < -sensitivity) {
                functionLeft();
            }
        }

        // Сбросим значения и состояние
        touchStartX = 0;
        touchEndX = 0;
        isTouchMoving = false;
    });
};