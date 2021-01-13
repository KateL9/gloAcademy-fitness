const formPopups = () => {
    const appointmentForm = document.querySelector('div#free_visit_form'),
        callbackForm = document.querySelector('div#callback_form'),
        giftForm = document.querySelector('#gift');

    document.body.addEventListener('click', (event) => {
        if (event.target.matches('.open-popup')) {
            appointmentForm.style.display = 'block';
        } else if (event.target.matches('.callback-btn')) {
            callbackForm.style.display = 'block';
        } else if (event.target.closest('.fixed-gift')) {
            event.target.style.display = 'none';
            giftForm.style.display = 'block';
        } else if (event.target.matches('.overlay') || event.target.matches('[class *= close]')) {
            appointmentForm.style.display = 'none';
            callbackForm.style.display = 'none';
            giftForm.style.display = 'none';
        }
    });

};
formPopups();

export default formPopups;