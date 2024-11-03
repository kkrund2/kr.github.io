function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// JavaScript для смены изображений
let slideIndex = 0;
const slides = document.querySelectorAll(".hero-image");

function showSlides() {
  // Сначала скрываем все изображения
  slides.forEach((slide) => (slide.style.opacity = 0));

  // Увеличиваем индекс и возвращаем к нулю, если он больше, чем количество слайдов
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Отображаем текущее изображение
  slides[slideIndex - 1].style.opacity = 1;

  // Меняем слайд каждые 5 секунд
  setTimeout(showSlides, 5000);
}

// Запускаем функцию слайдера
showSlides();

// Скрипт для анимации при прокрутке
function handleScrollAnimation() {
  const scrollItems = document.querySelectorAll(".scroll-animate"); // Все элементы с классом 'scroll-animate'

  scrollItems.forEach((item) => {
    const itemPosition = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Если элемент попадает в видимую область
    if (itemPosition < windowHeight - 100) {
      item.classList.add("visible");
    } else {
      item.classList.remove("visible");
    }
  });
}

// Запуск функции при скролле и при загрузке страницы
window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

// Раскрытие/скрытие ответов при клике на вопрос
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

const carouselItems = document.querySelector(".carousel-items");
const totalItems = document.querySelectorAll(".product-card").length;
let currentIndex = 0;

document.querySelector(".carousel-next").addEventListener("click", () => {
  if (currentIndex < totalItems - 4) {
    // Минус 4 для ограничения по количеству видимых карточек
    currentIndex++;
    carouselItems.style.transform = `translateX(-${currentIndex * 25}%)`; // Сдвиг на 25% для каждой карточки
  }
});

document.querySelector(".carousel-prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselItems.style.transform = `translateX(-${currentIndex * 25}%)`;
  }
});

document.querySelector(".carousel-next").addEventListener("click", () => {
  document.querySelector(".carousel-items").scrollBy({
    left: document.querySelector(".carousel-wrapper").offsetWidth,
    behavior: "smooth",
  });
});

document.querySelector(".carousel-prev").addEventListener("click", () => {
  document.querySelector(".carousel-items").scrollBy({
    left: -document.querySelector(".carousel-wrapper").offsetWidth,
    behavior: "smooth",
  });
});
















