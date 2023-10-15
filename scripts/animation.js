// Функция, которая будет вызываться при изменении видимости элемента
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-1');
            // Опционально: можно отключить наблюдение после активации
            observer.unobserve(entry.target);
        }
    });
}

// Создание экземпляра Intersection Observer
const options = {
    threshold: 0.5, // Когда видимость элемента составляет 50% и более
};
const observer = new IntersectionObserver(handleIntersection, options);

// Начните наблюдение за элементами с классом 'why-utcs__list-item'
const animations = document.querySelectorAll('.why-utcs__list-item');
animations.forEach((item) => {
    observer.observe(item);
});

// Вызов начальной анимации для первого элемента (если он видим в момент загрузки страницы)
if (
    animations.length > 0 &&
    animations[0].getBoundingClientRect().top < window.innerHeight * 0.5
) {
    animations[0].classList.add('active-1'); 
}
