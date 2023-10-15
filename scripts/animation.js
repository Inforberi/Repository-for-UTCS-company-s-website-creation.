// Function that will be called when the element visibility is changed
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-1');
            // Optional: you can deactivate monitoring after activation
            observer.unobserve(entry.target);
        }
    });
}

// Creating an Intersection Observer instance
const options = {
    threshold: 0.5, // When the visibility of an item is 50% or more
};
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing items with the class 'why-utcs__list-item'
const animations = document.querySelectorAll('.why-utcs__list-item');
animations.forEach((item) => {
    observer.observe(item);
});

// Call the initial animation for the first element (if it is visible at the moment of page loading)
if (
    animations.length > 0 &&
    animations[0].getBoundingClientRect().top < window.innerHeight * 0.5
) {
    animations[0].classList.add('active-1'); 
}
