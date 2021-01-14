const mainSlider = () => {
    const slider = document.querySelector('.main-slider'),
        allSlides = [...slider.querySelectorAll('.slide')];

    let count = 0;

    const nextSlide = (array, index) => {
        array[index].style.display = 'none';
        array[index + 1].style.display = 'flex';
    };

    const slide = () => {
        if (count >= allSlides.length - 1) {
            count = 0;
        }
        nextSlide(allSlides, count);
        ++count;
    }

    const start = (time = 2000) => {
        setInterval(slide, time);
    }
    start(2000);
};

export default mainSlider;