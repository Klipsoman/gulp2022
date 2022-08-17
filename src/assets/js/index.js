import { checkMobile } from "./utils/index.js";
import Swiper from "./swiper/index.min.js";
import { createMaps } from "./maps.js";

document.addEventListener("DOMContentLoaded", (e) => {
  // Homepage scripts
  const header = document.querySelector("#header");
  const headerContent = header.querySelector(".header__content");
  const burgerBtn = header.querySelector("#burger-btn");

  const innerBtn = document.querySelector(".inner__btn");
  const modalForm = document.querySelector("#modal-form");
  const closeModalFormBtn = document.querySelector(
    "#modal-form .modal-form__close"
  );

  document.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 30) {
      headerContent.style.borderBottom = "1px solid #CACACA";
      return;
    }
    headerContent.style.borderBottom = "none";
  });

  // Проверка устройства
  if (checkMobile.isMobile()) {
    let menuItems = header.querySelectorAll(".header__navigation > ul > li");
    let itemsFiltered = [...menuItems].filter((item) => {
      // есть ли подменю
      return item.children[1] ? true : false;
    });

    itemsFiltered.forEach((item) => {
      item.classList.add("hasSubmenu");
      item.addEventListener("click", (e) => {
        item.classList.toggle("submenu-active");
      });
    });

    document.body.classList.add("_mobile");
  } else {
    document.body.classList.add("_desktop");
  }

  // Mobile menu
  burgerBtn.addEventListener("click", (e) => {
    if (headerContent.classList.contains("menuopen")) {
      burgerBtn.classList.remove("menuopen");
      headerContent.classList.remove("menuopen");
      document.body.style.overflowY = "";
      return;
    }
    burgerBtn.classList.add("menuopen");
    headerContent.classList.add("menuopen");
    document.body.style.overflowY = "hidden";
  });

  // Sector market (change image by hover)
  const sectorList = document.querySelector(
    ".sector .sector__right .sector__list"
  );
  if (sectorList) {
    sectorList.addEventListener("mouseover", (e) => {
      if (
        e.target.classList.contains("sector__link") ||
        e.target.classList.contains("sector__item")
      ) {
        const item = e.target.tagName === "LI" ? e.target : e.target.parentNode;
        const images = document.querySelectorAll(
          ".sector .sector__left .sector__image"
        );

        for (let i = 0; i < images.length; i++) {
          if (images[i].dataset.num === item.dataset.num) {
            images[i].dataset.visible = "visible";
          } else {
            images[i].dataset.visible = "";
          }
        }
      }
    });
  }

  // Modal. Home-page
  if (innerBtn) {
    innerBtn.addEventListener("click", (e) => {
      modalForm.classList.add("modal-form__visible");
    });

    closeModalFormBtn.addEventListener("click", closeModal);

    function closeModal() {
      modalForm.classList.remove("modal-form__visible");
    }
  }
  // Modal. 404.html
  const btn404 = document.querySelector('.page404 .error404 button.error404__btn')
  if (btn404) {
    btn404.addEventListener("click", (e) => {
      modalForm.classList.add("modal-form__visible");
    });

    closeModalFormBtn.addEventListener("click", closeModal);

    function closeModal() {
      modalForm.classList.remove("modal-form__visible");
    }
  }

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

  // Create maps
  createMaps();
});
