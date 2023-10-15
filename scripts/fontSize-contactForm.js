'use strict';

const fontSizeInput = document.querySelectorAll('.contact-form__form_input');
const phoneInput = document.getElementById('phoneInput');
const fontSizeTextArea = document.querySelector(
    '.contact-form__form_text-area'
);

// Находим размер шрифта
const fontSize = window.getComputedStyle(phoneInput);
const fontSizeInp = fontSize.getPropertyValue('font-size');
const fontSizeEndInput = parseFloat(fontSizeInp) + 3;

document.addEventListener('DOMContentLoaded', () => {
    // Функция для изменения размера шрифта
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
            // Изменение размера текста при вводе
            font.addEventListener('input', () => {
                changeSize(font, fontSizeEndInput);
            });

            // Добавляем обработчик change для авто-заполнения
            font.addEventListener('change', () => {
                changeSize(font, fontSizeEndInput);
            });
        });

        // Добавляем обработчик для телефонного номера (только числа и +)
        phoneInput.addEventListener('input', function (event) {
            const inputValue = event.target.value.replace(/[^\d+]/g, '');
            event.target.value = inputValue;
        });

        phoneInput.addEventListener('change', (event) => {
            const inputValue = event.target.value.replace(/[^\d+]/g, '');
            event.target.value = inputValue;
        });

        fontSizeTextArea.addEventListener('input', () => {
            // Изменение размера текста при загрузке страницы
            changeSize(fontSizeTextArea, fontSizeEndInput);
        });

        fontSizeTextArea.addEventListener('change', () => {
            // Изменение размера текста при загрузке страницы
            changeSize(fontSizeTextArea, fontSizeEndInput);
        });
    };

    window.addEventListener('load', fontSizeFn);
    window.addEventListener('resize', fontSizeFn);
});
