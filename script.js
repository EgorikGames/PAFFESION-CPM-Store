// Фильтрация товаров
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Модальное окно покупки
    const buyBtns = document.querySelectorAll('.btn-buy');
    const modal = document.getElementById('buyModal');
    const modalProductName = document.getElementById('modalProductName');
    const closeBtn = document.querySelector('.close');
    const copyBtn = document.getElementById('copyProduct');

    let currentProductName = '';

    buyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            currentProductName = this.getAttribute('data-product');
            // **Исправление: используйте обратные кавычки для интерполяции строк**
            modalProductName.textContent = `Товар: ${currentProductName}`; // Используем интерполяцию строк ES6
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Копирование названия товара
    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(currentProductName).then(function() {
            copyBtn.textContent = 'Скопировано!';
            setTimeout(() => {
                copyBtn.textContent = 'Скопировать название';
            }, 2000);
        });
    });

    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
