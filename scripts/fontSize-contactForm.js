'use strict';

const fontSizeInput = document.querySelectorAll('.contact-form__form_input');
const phoneInput = document.getElementById('phoneInput');
const fontSizeTextArea = document.querySelector(
    '.contact-form__form_text-area'
);

// Find the font size
const fontSize = window.getComputedStyle(phoneInput);
const fontSizeInp = fontSize.getPropertyValue('font-size');
const fontSizeEndInput = parseFloat(fontSizeInp) + 3;

document.addEventListener('DOMContentLoaded', () => {
    // Function for changing the font size
    const changeSize = (font, fontSize) => {
        if (font.value.length === 0) {
            font.style.fontSize = '';
            font.style.color = '';
        } else {
            font.style.fontSize = fontSize + 'px';
            font.style.color = 'black';
        }
    };

    const fontSizeFn = () => {
        fontSizeInput.forEach((font) => {
            // Resizing text as you type
            font.addEventListener('input', () => {
                changeSize(font, fontSizeEndInput);
            });

            // Add change handler for auto-complete
            font.addEventListener('change', () => {
                changeSize(font, fontSizeEndInput);
            });
        });

        // Add a handler for a phone number (only numbers and +)
        phoneInput.addEventListener('input', function (event) {
            const inputValue = event.target.value.replace(/[^\d+]/g, '');
            event.target.value = inputValue;
        });

        phoneInput.addEventListener('change', (event) => {
            const inputValue = event.target.value.replace(/[^\d+]/g, '');
            event.target.value = inputValue;
        });

        fontSizeTextArea.addEventListener('input', () => {
            // Resizing text on page load
            changeSize(fontSizeTextArea, fontSizeEndInput);
        });

        fontSizeTextArea.addEventListener('change', () => {
            // Resizing text on page load
            changeSize(fontSizeTextArea, fontSizeEndInput);
        });
    };

    window.addEventListener('load', fontSizeFn);
    window.addEventListener('resize', fontSizeFn);
});
