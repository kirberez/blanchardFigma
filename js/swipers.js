// HERO-SWIPER
const swiper = new Swiper('.hero__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  loopedSlides: 3,
  // slidesPerView: 'auto',
  watchSlidesProgress: true,
  wrapperClass: 'hero__swiper-wrapper',
  slideClass: 'hero__swiper-slide',

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});

// GALLERY-SWIPER
const gallerySwiper = new Swiper('.gallery__swiper', {
  direction: 'horizontal',
  // loop: true,
  spaceBetween: 35,
  slideClass: 'gallery__swiper-slide',
  wrapperClass: 'gallery__swiper-wrapper',


  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
    disabledClass: 'gallery__swiper-button-disabled',
  },

  pagination: {
    el: '.gallery__swiper-pagination-fraction',
    type: 'fraction',
    currentClass: 'gallery__swiper-pagination-current',
    totalClass: 'gallery__swiper-pagination-total',
    horizontalClass: 'gallery__swiper-pagination-horizontal',

    clickable: true,
  },

  breakpoints: {
    620: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },

    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
})

// ACTIONS-SWIPER 
const actionsSwiper = new Swiper('.actions-swiper', {
  direction: 'horizontal',
  spaceBetween: 35,

  pagination: {
    el: '.actions-swiper__pagination',
    bulletClass: 'actions-swiper-pagination__bullets',
    type: 'bullets',
    clickable: true,
  },
  
  navigation: {
    prevEl: '.swiper-container__button-prev',
    nextEl: '.swiper-container__button-next',
    disabledClass: 'swiper-container__button-disabled',
  },

  breakpoints: {
    620: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },
})

// PROJECTS-SWIPER
const testSwiper = new Swiper('.projects__swiper', {
  direction: 'horizontal',
  clickable: true,
  wrapperClass: 'projects__swiper-wrapper',
  slideClass: 'projects__swiper-slide',
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    prevEl: '.projects__swiper-button-prev',
    nextEl: '.projects__swiper-button-next',
    disabledClass: 'projects__swiper-button-disabled',
  },

  breakpoints: {
    620: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 33,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },

    1440: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    }
  },
})
