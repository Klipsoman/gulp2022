import { checkMobile } from "./utils/index.js";
import { createMapsManufacture, createMapsContacts } from "./maps.js";
import { initSliders } from "./swiper/initSlider.js";

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

  // Init sliders
  initSliders();

  // Create maps
  createMapsContacts();
  createMapsManufacture();
});
