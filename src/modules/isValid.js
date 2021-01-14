const isValid = () => {
    const regExpText = /^[а-яА-Я]+$/;

    document.body.addEventListener('focusout', (event) => {
        let target = event.target;
        if (target.name == 'name' && target.placeholder !== 'Промокод') {
            target.style.border = '1px solid #b7b7b7';
            target.setCustomValidity('');
            if (!regExpText.test(target.value) || target.value.length < 2) {
                target.setCustomValidity("Введите имя");
                target.value = '';
                target.style.border = `3px solid red`
            }
        } else {
            target.style.border = '1px solid #b7b7b7';
        }
    });
}

export default isValid;