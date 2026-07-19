/**
 * main.js — Глобальные скрипты для всего сайта
 * Подключается на всех страницах для улучшения UX
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Умная шапка при скролле (через CSS-классы)
    // ==========================================
    const header = document.querySelector('.header');
    
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        // Используем passive: true для улучшения производительности скролла
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Проверка при загрузке страницы
    }

    // ==========================================
    // 2. Плавная прокрутка к якорным ссылкам (например, #contacts)
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Учитываем высоту фиксированной шапки и бегущей строки (~120px)
                const headerOffset = 120;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // 3. Резервная логика слайдера (ТОЛЬКО если нет inline-скрипта)
    // ==========================================
    // Примечание: В index.html уже есть продвинутый слайдер. 
    // Этот код сработает только как безопасный фоллбэк, если inline-скрипт удален.
    const dots = document.querySelectorAll('.dot');
    const heroSlider = document.getElementById('heroSlider');
    
    if (dots.length > 0 && heroSlider && !window.inlineSliderInitialized) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Убираем активный класс у всех точек
                dots.forEach(d => d.classList.remove('active'));
                // Добавляем активный класс нажатой точке
                dot.classList.add('active');
                
                // Сдвигаем слайдер с помощью transform (как в CSS index.html)
                heroSlider.style.transform = `translateX(-${index * 100}%)`;
            });
        });
        
        // Помечаем, что слайдер инициализирован, чтобы избежать дублирования
        window.inlineSliderInitialized = true; 
    }

    console.log('✅ main.js успешно загружен и работает!');
});
