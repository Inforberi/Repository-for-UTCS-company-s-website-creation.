'use strict';
//composer require phpmailer/phpmailer  нужно для активации php mailer ввести в командной строке
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const submitButton = document.getElementById('submitButton');
    const validateInput = document.querySelectorAll('[required]');
    const placeholderFontSize = document.querySelectorAll('[placeholder]');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const restFontSize = () => {
        placeholderFontSize.forEach((font) => {
            font.style.fontSize = fontSizeInp;
        });
    };

    submitButton.addEventListener('click', async function () {
        if (await validateForm()) {
            try {
                submitButton.classList.add('loading'); // Add a loading class for animation
                submitButton.textContent = 'Loading...';

                const formData = new FormData(form);
                const responsePromise = fetch('../sender.php', {
                    method: 'POST',
                    body: formData,
                });

                // Set the maximum waiting time to 30 seconds
                const timeoutPromise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject(new Error('Timeout exceeded'));
                    }, 30000); // 30 seconds
                });

                // Waiting for the request to complete or for the waiting time to expire
                const response = await Promise.race([
                    responsePromise,
                    timeoutPromise,
                ]);

                if (response.ok) {
                    submitButton.classList.remove('loading'); 
                    submitButton.classList.add('sent'); 
                    submitButton.textContent = 'Sent';
                    form.reset();
                    restFontSize();

                    setTimeout(() => {
                        submitButton.classList.remove('sent'); 
                        submitButton.textContent = 'Send';
                    }, 1500); 
                } else {
                    
                    console.error('Ошибка при отправке данных на сервер');
                    showErrorAndReset();
                }
            } catch (error) {
                setTimeout(() => {
                    submitButton.textContent = 'Send';
                }, 2000); 

                submitButton.textContent = 'Error';
                console.error('Произошла ошибка при отправке данных:', error);
                showErrorAndReset();
            }
        }
    });

    const showErrorAndReset = () => {
        if (submitButton.textContent !== 'Sent') {
            // Check that the button does not have the text "Sent"
            submitButton.textContent = 'Error';

            setTimeout(() => {
                submitButton.textContent = 'Send';
            }, 1500);

            form.reset();
            restFontSize();
        }
    };

    let validate = false;

    const validateForm = async () => {
        validateInput.forEach((input) => {
            if (input.name === 'name' || input.name === 'text') {
                if (!input.value.trim()) {
                    input.style.boxShadow = '0 0 15px red';
                    validate = false;
                }
            }
            if (input.name === 'email') {
                if (!emailRegex.test(input.value)) {
                    input.style.boxShadow = '0 0 15px red';
                    validate = false;
                }
            }
        });

        return validate;
    };

    validateInput.forEach((input) => {
        input.addEventListener('input', () => {
            if (input.name === 'name' || input.name === 'text') {
                if (input.value.trim()) {
                    input.style.boxShadow = '';
                    validate = true;
                }
            }
            if (input.name === 'email') {
                if (emailRegex.test(input.value)) {
                    input.style.boxShadow = '';
                    validate = true;
                }
            }
        });
    });

    const submitButtonClickHandler = function (event) {
        event.preventDefault();
        validateForm();
        submitButton.removeEventListener('click', submitButtonClickHandler);
    };
});
