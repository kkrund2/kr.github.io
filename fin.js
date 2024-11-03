// Данные для карусели изображений
const productsData = {
    product1: {
        title: "Гирлянда Новый Год",
        description: "Описание Карточки Новый Год.",
        price: "1000₽",
        images: ["images/ready/1.jpg"]
    },
    product2: {
        title: "Мешочки для хранения трав",
        description: "Оe4fе'.",
        price: "1000₽",
        images: ["images/ready/Изображение 016.jpg"]
    },
    product3: {
        title: "Наволочка Коты",
        description: "1.",
        price: "500₽",
        images: ["images/ready/IMG_1484.jpg"]
    },
    product4: {
        title: "Майка 'Париж'",
        description: "Оe4fе'.",
        price: "1000₽",
        images: ["images/ready/Ф1.jpg"]
    },
    product5: {
        title: "Шевроны",
        description: "Оe4fе'.",
        price: "1000₽",
        images: ["images/ready/photo_2024-11-01_14-35-10.jpg"]
    },
    product6: {
        title: "Худи Бабочки",
        description: "Оe4fе'.",
        price: "1000₽",
        images: ["images/ready/photo_2024-11-01_14-31-18.jpg", "image2.jpg", "image3.jpg"]
    },
    product7: {
        title: "Худи Котенок Гав",
        description: "Оe4fе'.",
        price: "1000₽",
        images: ["yilvn1-vishivka-1.jpg", "image2.jpg", "image3.jpg"]
    },
    product8: {
        title: "Футболка Царь",
        description: "Оe4fе'.",
        price: "1000₽",
        images: ["images/ready/царь1.jpg", "images/ready/царь2.jpg"]
    },
    product9: {
        title: "Комплект косметичек",
        description: "Оe4fе'.",
        price: "1000₽",
        images: ["images/ready/IMG_91311.jpg", "images/ready/IMG_91321.jpg", "images/ready/IMG_91331.jpg", "images/ready/IMG_91341.jpg", "images/ready/IMG_91351.jpg", "images/ready/IMG_91371.jpg", "images/ready/IMG_91361.jpg"]
    },
    product10: {
        title: "Сарафан Народный",
        description: "Оe4fе'.",
        price: "1000₽",
        images: ["images/ready/IMG_4228.JPG", "images/ready/IMG_4227.JPG"]
    },

};

let currentProduct = '';
let currentImageIndex = 0;

function openModal(productId) {
    const modal = document.getElementById("productModal");
    const product = productsData[productId];

    if (product) {
        currentProduct = productId;
        currentImageIndex = 0;

        document.getElementById("modalTitle").textContent = product.title;
        document.getElementById("modalDescription").textContent = product.description;
        document.getElementById("modalPrice").textContent = `Цена: ${product.price}`;
        document.getElementById("modalImage").src = product.images[currentImageIndex];

        modal.style.display = "flex";
    }
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

function nextImage() {
    const product = productsData[currentProduct];
    currentImageIndex = (currentImageIndex + 1) % product.images.length;
    document.getElementById("modalImage").src = product.images[currentImageIndex];
}

function prevImage() {
    const product = productsData[currentProduct];
    currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
    document.getElementById("modalImage").src = product.images[currentImageIndex];
}

function addToCart() {
    const product = productsData[currentProduct];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({
        name: product.title,
        price: product.price,
        image: product.images[0]
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Товар добавлен в корзину!');
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
