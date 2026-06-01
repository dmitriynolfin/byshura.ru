// Слайдер
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.hero-slide');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        slides.forEach(s => s.classList.remove('active'));
        dot.classList.add('active');
        slides[index].classList.add('active');
    });
});

// Фиксация шапки при скролле
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 1px 0 rgba(0, 0, 0, 0.05)';
    }
});
