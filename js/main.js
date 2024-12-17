// var burgerMenu = document.getElementById('burger-menu');
// var overlay = document.getElementById('menu');
// burgerMenu.addEventListener('click', function () {
//     this.classList.toggle("close");
//     overlay.classList.toggle("overlay");
// });
// overlay.addEventListener('click', function (e) {
//     if (e.target.matches('a')) {
//         overlay.classList.remove('overlay');
//         burgerMenu.classList.remove('close');
//     }
// });
/****************************************************************************/
// const burger = document.querySelector('.body--opened-burger');
// const lines = document.querySelectorAll('.burger-icon');

// function toggleBurger() {
//     lines.forEach((line) => line.classList.toggle('active'));
// }

// burger.addEventListener('click', toggleBurger);
/********************************************************************************/
// Бургер
(function () {
    document.addEventListener('click', burgerInit)
    function burgerInit(event) {
        // const target = e.target
        const burgerIcon = event.target.closest('.burger-icon')
        const burgerNavLink = event.target.closest('.nav__link')
        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return
        if (!document.body.classList.contains('body--opened-burger')) {
            document.body.classList.add('body--opened-burger')
        } else {
            document.body.classList.remove('body--opened-burger')
        }

    }

    /**********************************************************************************/
    // Модалка
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')
    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)
    function openModal(event) {
        event.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }
    function closeModal(event) {
        event.preventDefault()
        const target = event.target
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }
    /**************************************************************************************/
    // Табы
    const tabContros = document.querySelector('.tab-controls')
    tabContros.addEventListener('click', toggleTab)
    function toggleTab(event) {
        const tabControl = event.target.closest('.tab-controls__link')
        if (!tabControl) return
        event.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }

    /************************************************************************************/
    // Аккордион

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });

    // Слайдер

    new Swiper('.gallery__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 2,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            },
        },
    });

    // Слайдер отзывы

    new Swiper('.testimonials__slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            },
        },
    });

    // Маска
    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)
})()
