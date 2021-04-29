//menu__burger
$(document).ready(function () {
    $('.header__burger, .header__link').click(function (event) {
        $('.header__burger,.header__menu,.registration__header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

//swiper__slider
const first__swipper = new Swiper('.first__swipper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: false,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 70,
        stretch: 10,
        slideShadows: true,
    },
    // autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    // },
    speed: 1000,
});

//service slider
const swiper__service = new Swiper('.swiper__service', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.service_button_next',
        prevEl: '.service_button_prev',
    },
    slidesPerView: 6,
    spaceBetween: 16,
    freeMode: true,
    // autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    // },
    speed: 1000,
    breakpoints: {
        1300: {
            slidesPerView: 6,
        },
        1100: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        },
        550: {
            slidesPerView: 3,
        },
        360: {
            slidesPerView: 2,
        },
        315: {
            slidesPerView: 1,
        },
    }
});


const news__slider = new Swiper('.news__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.service_button_next',
        prevEl: '.service_button_prev',
    },
    slidesPerView: 4,
    spaceBetween: 15,
    freeMode: true,
    // autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    // },
    speed: 1000,
    breakpoints: {
        1000: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 13,
        },
        650: {
            slidesPerView: 3,
        },
        365: {
            slidesPerView: 2,
        },
        315: {
            slidesPerView: 1,
        },
    }
});


//show password

function show_hide_password(target) {
    var input = document.getElementById('password_input');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}

//input mask
$(function () {
    $("#phone").mask("+7(999) 999-9999");
});


//custom__select
for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function () {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
};

window.addEventListener('click', function (e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});

//tabs

const tabsBtn = document.querySelectorAll(".tabs__nav__btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains("active")) {
            tabsBtn.forEach(function (item) {
                item.classList.remove("active");
            });

            tabsItems.forEach(function (item) {
                item.classList.remove("active");
            });

            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }
    });
});

document.querySelector('.tabs__nav__btn:nth-child(2)').click();
