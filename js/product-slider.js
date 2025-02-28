const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev, .prev-dark');
const nextButton = document.querySelector('.next, .next-dark');
const pagination = document.querySelector('.pagination');
let index = 0;
let startX = 0;
let endX = 0;

// Обновляем ширину слайдера, чтобы работало корректно
function setSliderWidth() {
    const sliderWidth = slides.length * 100;
    slider.style.width = `${sliderWidth}%`;
    slides.forEach(slide => (slide.style.width = `${100 / slides.length}%`));
}

function updateSlider() {
    slider.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
    updatePagination();
}

function updatePagination() {
    pagination.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === index) dot.classList.add('active');
        dot.addEventListener('click', () => {
            index = i;
            updateSlider();
        });
        pagination.appendChild(dot);
    });
}

// Кнопки
nextButton.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlider();
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});

// Свайп
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        index = (index + 1) % slides.length;
    } else if (endX - startX > 50) {
        index = (index - 1 + slides.length) % slides.length;
    }
    updateSlider();
});

// Инициализация
setSliderWidth();
updatePagination();
