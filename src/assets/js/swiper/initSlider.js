import Swiper from "./index.min.js";

export const initSliders = () => {
  // init sliders
  
  const projectsSwiper = new Swiper("#projects__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 21,
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const sectorSwiper = new Swiper("#sector__swiper", {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 21,
    autoHeight: true,
  });

  const runSystemSwiper = new Swiper("#run-system__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 21,
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const steelFramesSwiper = new Swiper("#steel-frames__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 21,
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const bvzSwiper = new Swiper("#bvz__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 21,
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const productPageSwiper = new Swiper("#product-page__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 21,
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const useAreasSlider = new Swiper("#slider-use-areas", {
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 21,
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 1.7,
        spaceBetween: 12,
        slidesPerGroup: 1,
      },
      1000: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  // project-page sliders
  const projectPageSwiper = new Swiper("#project-page__swiper", {
    navigation: {
      nextEl: "#project-swiper-button-next",
      prevEl: "#project-swiper-button-prev",
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 21,
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const aboutProjectPageSwiper = new Swiper("#about-project__swiper", {
    navigation: {
      nextEl: "#about-project-swiper-button-next",
      prevEl: "#about-project-swiper-button-prev",
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
};