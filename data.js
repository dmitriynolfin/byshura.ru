// data.js — ЕДИНЫЙ ИСТОЧНИК ДАННЫХ ДЛЯ ВСЕГО САЙТА

const SITE_SETTINGS = {
    pickup: {
        ru: "ЖК Prime Park, Москва", // ✅ Обновлено по вашему запросу
        en: "Merano Tower, Dubai"
    },
    hours: {
        ru: "Пт-Сб-Вс 17:00 – 23:00",
        en: "Fri-Sat-Sun 17:00 – 23:00"
    },
    telegram: "https://t.me/sash_shura"
};

const CATALOG = {
    "box1": {
        id: "box1",
        type: "box",
        name: { ru: "Бокс «Ужин Николая II»", en: "Nicholas II Dinner Box" },
        prices: { ru: { 2: 8000, 4: 15000, 6: 20000 }, en: { 2: 400, 4: 700, 6: 1000 } },
        images: { desktop: "images/boxes-nicholas-1.webp", mobile: "images/boxes-nicholas-1-mobile.webp" },
        gallery: [
            "images/boxes-nicholas-1.webp",
            "images/boxes-nicholas-2.webp",
            "images/boxes-nicholas-3.webp",
            "images/boxes-nicholas-4.webp",
            "images/boxes-nicholas-5.webp",
            "images/boxes-nicholas-6.webp",
            "images/boxes-nicholas-7.webp",
            "images/boxes-nicholas-8.webp",
            "images/boxes-nicholas-9.webp"
        ],
        composition: {
            ru: [
                { name: "Закуски: Расстегаи с красной рыбой", w2: "150 г", w4: "300 г", w6: "450 г" },
                { name: "Салаты: Винегрет с нутом и солеными грибами", w2: "200 г", w4: "400 г", w6: "600 г" },
                { name: "Основной курс: Жареные пельмени с говядиной и Драгомировская каша", w2: "300 г", w4: "600 г", w6: "900 г" },
                { name: "Десерты: Овсяное печенье", w2: "250 г", w4: "500 г", w6: "750 г" }
            ],
            en: [
                { name: "Appetizers: Rasstegai with red fish", w2: "150 g", w4: "300 g", w6: "450 g" },
                { name: "Salads: Vinaigrette with chickpeas and pickled mushrooms", w2: "200 g", w4: "400 g", w6: "600 g" },
                { name: "Main course: Fried beef dumplings and Dragomirovskaya porridge", w2: "300 g", w4: "600 g", w6: "900 g" },
                { name: "Desserts: Oatmeal cookies", w2: "250 g", w4: "500 g", w6: "750 g" }
            ]
        },
        allergens: ["Грибы", "Лактоза", "Глютен", "Яйца", "Красная рыба", "Орехи"]
    },
    "box2": {
        id: "box2",
        type: "box",
        name: { ru: "Бокс «Ужин Чайковского»", en: "Tchaikovsky Dinner Box" },
        prices: { ru: { 2: 8000, 4: 15000, 6: 20000 }, en: { 2: 400, 4: 700, 6: 1000 } },
        images: { desktop: "images/boxes-tchaikovsky-1.webp", mobile: "images/boxes-tchaikovsky-1-mobile.webp" },
        gallery: [
            "images/boxes-tchaikovsky-1.webp",
            "images/boxes-tchaikovsky-2.webp",
            "images/boxes-tchaikovsky-3.webp",
            "images/boxes-tchaikovsky-4.webp",
            "images/boxes-tchaikovsky-5.webp",
            "images/boxes-tchaikovsky-6.webp",
            "images/boxes-tchaikovsky-7.webp",
            "images/boxes-tchaikovsky-8.webp",
            "images/boxes-tchaikovsky-9.webp",
            "images/boxes-tchaikovsky-10.webp",
            "images/boxes-tchaikovsky-11.webp",
            "images/boxes-tchaikovsky-12.webp",
            "images/boxes-tchaikovsky-13.webp",
            "images/boxes-tchaikovsky-14.webp",
            "images/boxes-tchaikovsky-15.webp"
        ],
        composition: {
            ru: [
                { name: "Закуски: Взбитое масло с солью и перцем<br>Домашний хлеб<br>Соленые огурчики с медом<br>Шампиньоны в пивном кляре", w2: "150 г", w4: "300 г", w6: "450 г" },
                { name: "Салаты: Салат из зелени с ароматным маслом", w2: "200 г", w4: "400 г", w6: "600 г" },
                { name: "Основной курс: Телятина в сливочном соусе<br>Жареный картофель со сливочными грибами", w2: "300 г", w4: "600 г", w6: "900 г" },
                { name: "Десерты: Заливной пирог с лимонным курдом", w2: "250 г", w4: "500 г", w6: "750 г" }
            ],
            en: [
                { name: "Whipped butter with salt and pepper<br>Homemade bread<br>Pickled cucumbers with honey<br>Beer-battered champignons", w2: "150 g", w4: "300 g", w6: "450 g" },
                { name: "Salads: Herb salad with aromatic oil", w2: "200 g", w4: "400 g", w6: "600 g" },
                { name: "Main course: Veal in cream sauce<br>Fried potatoes with creamy mushrooms", w2: "300 g", w4: "600 g", w6: "900 g" },
                { name: "Desserts: Lemon curd pie", w2: "250 g", w4: "500 g", w6: "750 g" }
            ]
        },
        allergens: ["Грибы", "Мед", "Лактоза", "Яйца", "Глютен"]
    },
    "cake1": {
        id: "cake1",
        type: "cake",
        name: { ru: "Сливочный лимонный кекс", en: "Creamy Lemon Cake" },
        prices: { ru: 3000, en: 150 },
        images: { desktop: "images/boxes-lemoncake.webp", mobile: "images/boxes-lemoncake-mobile.webp" },
        gallery: [
            "images/boxes-lemoncake.webp",
            "images/boxes-lemoncake-1.webp",
            "images/boxes-lemoncake-2.webp",
            "images/boxes-lemoncake-3.webp",
            "images/boxes-lemoncake-4.webp",
            "images/boxes-lemoncake-5.webp",
            "images/boxes-lemoncake-6.webp",
            "images/boxes-lemoncake-7.webp",
            "images/boxes-lemoncake-8.webp"
        ],
        description: { 
            ru: "Невероятно нежный лимонный кекс на основе сливочного масла и сливок.<br>Идеальный вариант для тех, кто предпочитает не слишком сладкие цитрусовые десерты с богатым сливочным вкусом.<br>Вес ~ 1 кг",
            en: "Incredibly tender lemon cake based on butter and cream.<br>Perfect for those who prefer not too sweet citrus desserts with a rich creamy taste.<br>Weight ~ 1 kg"
        },
        composition: {
            ru: [{ name: "Лимонный кекс", w: "~ 1000 г" }],
            en: [{ name: "Lemon cake", w: "~ 1000 g" }]
        },
        allergens: ["Глютен", "Яйца", "Лактоза"]
    },
    "lemon-cookies": {
        id: "lemon-cookies",
        type: "quantity-item",
        name: { ru: "Нежное печенье с лимонным курдом", en: "Tender Cookies with Lemon Curd" },
        prices: { ru: { 4: 1000, 8: 1600 }, en: { 4: 50, 8: 80 } },
        images: { desktop: "images/boxes-lemoncookies-1.webp", mobile: "images/boxes-lemoncookies-1-mobile.webp" },
        gallery: [
            "images/boxes-lemoncookies-1.webp",
            "images/boxes-lemoncookies-2.webp",
            "images/boxes-lemoncookies-3.webp",
            "images/boxes-lemoncookies-4.webp"
        ],
        description: {
            ru: "Не приторное яркое цитрусовое печенье-пирожное с нежным центром в виде лимонного курда. Идеальный вариант к теплым напиткам.",
            en: "Not cloying bright citrus cookie-cake with a tender lemon curd center. Perfect with warm drinks."
        },
        composition: {
            ru: [{ name: "Печенье с лимонным курдом", w4: "4 шт (~ 400 г)", w8: "8 шт (~ 800 г)" }],
            en: [{ name: "Cookies with lemon curd", w4: "4 pcs (~ 400 g)", w8: "8 pcs (~ 800 g)" }]
        },
        allergens: ["Глютен", "Яйца", "Лактоза"]
    },
    "rasstegai": {
        id: "rasstegai",
        type: "quantity-item",
        name: { ru: "Расстегаи с красной рыбой и рисом", en: "Rasstegai with Red Fish and Rice" },
        prices: { ru: { 4: 1000, 8: 1800 }, en: { 4: 50, 8: 90 } },
        images: { desktop: "images/boxes-rasstegai-1.webp", mobile: "images/boxes-rasstegai-1-mobile.webp" },
        gallery: [
            "images/boxes-rasstegai-1.webp",
            "images/boxes-rasstegai-2.webp",
            "images/boxes-rasstegai-3.webp",
            "images/boxes-rasstegai-4.webp",
            "images/boxes-rasstegai-5.webp",
            "images/boxes-rasstegai-6.webp",
            "images/boxes-rasstegai-7.webp",
            "images/boxes-rasstegai-8.webp"
        ],
        description: {
            ru: "Сочные, перечные, с красной рыбой и рисом. Сытный вариант к бульонам и теплым напиткам.",
            en: "Juicy, peppery, with red fish and rice. A hearty option for broths and warm drinks."
        },
        composition: {
            ru: [{ name: "Расстегаи с рыбой", w4: "4 шт (~ 480 г)", w8: "8 шт (~ 960 г)" }],
            en: [{ name: "Rasstegai with fish", w4: "4 pcs (~ 480 g)", w8: "8 pcs (~ 960 g)" }]
        },
        allergens: ["Глютен", "Яйца", "Красная рыба"]
    }
};
