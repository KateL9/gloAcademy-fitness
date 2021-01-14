const sendForm = (idform) => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро свяжемся с вами!',
        policyMessage = 'Согласитесь на обработку персональных данных',
        form = document.getElementById(idform),
        policyCheckbox = form.querySelector('input[type="checkbox"]'),
        inputName = form.querySelector('input[type="text"]'),
        inputPhone = form.querySelector('input[type="tel"]');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 16px';
    statusMessage.style.color = 'red';
    statusMessage.style.margin = '5px 0 0 0';
    const deleteMessage = () => {
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 5000);
    };

    if (policyCheckbox) {
        policyCheckbox.removeAttribute('required');
        inputName.removeAttribute('required');
        inputPhone.removeAttribute('required');
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();


        if (inputName && (inputPhone.value == '' || inputName.value == '')) {
            form.appendChild(statusMessage);
            statusMessage.textContent = 'Необходимо заполнить все поля!';
            deleteMessage()
            return;
        }

        if (policyCheckbox && !policyCheckbox.checked) {
            form.appendChild(statusMessage);
            statusMessage.textContent = policyMessage;
            deleteMessage();
        } else {
            setData(event, form);
        }
    });

    const setData = (event, form) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });
        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200')
                }
                statusMessage.textContent = successMessage;
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
            });
    }
}

export default sendForm;