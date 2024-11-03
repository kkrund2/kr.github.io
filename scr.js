let currentPage = 1;
const itemsPerPage = 9;
let selectedCategories = new Set(); // Хранит выбранные категории

// Функция применения фильтра
function applyFilter() {
    // Получаем все чекбоксы фильтра
    const checkboxes = document.querySelectorAll('.filter input[type="checkbox"]');
    selectedCategories.clear(); // Очистим перед обновлением

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedCategories.add(checkbox.value);
        }
    });

    currentPage = 1; // Сброс на первую страницу после применения фильтра
    displayProducts(); // Обновление отображения карточек
}

// Функция отображения карточек товаров с учетом фильтра и пагинации
function displayProducts() {
    const productList = document.getElementById('product-list');
    const productCards = Array.from(productList.getElementsByClassName('product-card'));

    // Фильтруем карточки по выбранным категориям
    const filteredCards = productCards.filter(card => {
        const category = card.getAttribute('data-category');
        return selectedCategories.size === 0 || selectedCategories.has(category);
    });

    // Пагинация: отображаем карточки, соответствующие текущей странице
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    productCards.forEach(card => card.style.display = 'none'); // Скрываем все карточки

    filteredCards.slice(start, end).forEach(card => {
        card.style.display = 'block'; // Показываем только карточки текущей страницы
    });

    // Обновляем информацию о странице
    updatePagination(filteredCards.length);
}

// Функция обновления навигации по страницам
function updatePagination(totalItems) {
    const pageInfo = document.getElementById('page-info');
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    document.getElementById('prev-button').disabled = currentPage === 1;
    document.getElementById('next-button').disabled = currentPage === totalPages;

    pageInfo.textContent = `Страница ${currentPage} из ${totalPages}`;
}

// Переключение страницы
function changePage(offset) {
    currentPage += offset;
    displayProducts();
}

// Инициализация отображения карточек при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
