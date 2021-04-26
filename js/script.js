//menu__burger

$(document).ready(function () {
    $('.header__burger, .header__link').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
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