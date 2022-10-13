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
      // headerContent.style.borderBottom = "1px solid #CACACA";
      header.style.boxShadow = '1px 1px 16px -1px';
      return;
    }
    header.style.boxShadow = 'none';
    // headerContent.style.borderBottom = "none";
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
  const btn404 = document.querySelector(
    ".page404 .error404 button.error404__btn"
  );
  if (btn404) {
    btn404.addEventListener("click", (e) => {
      modalForm.classList.add("modal-form__visible");
    });

    closeModalFormBtn.addEventListener("click", closeModal);

    function closeModal() {
      modalForm.classList.remove("modal-form__visible");
    }
  }
  // Modal panel(product-page)
  const productBtn = document.querySelector(
    ".product-page .product .product__btn"
  );
  if (productBtn) {
    productBtn.addEventListener("click", (e) => {
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

  // Документы и сертификаты
  // Выбор типа документа
  const selectDocType = document.querySelector(
    "#documents-and-sertificates-type"
  );
  if (selectDocType) {
    selectDocType.addEventListener("click", (e) => {
      if (e.target === selectDocType) {
        selectDocType.classList.toggle("open");
      }
    });
  }
  // Количество записей в выводе
  const selectDocAmount = document.querySelector(
    "#documents-and-sertificates-amount"
  );
  if (selectDocAmount) {
    selectDocAmount.addEventListener("click", (e) => {
      const items = selectDocAmount.querySelectorAll(".amount__item label");
      const docsMainForm = document.querySelector("#docs-main-form");

      items.forEach((item) => {
        item.addEventListener("click", itemClick);
      });

      selectDocAmount.classList.toggle("open");

      function itemClick(e) {
        const count = e.currentTarget.dataset.mount;
        const input = e.target.querySelector("input");

        input.setAttribute("checked", true);
        docsMainForm.submit();

        items.forEach((item) => {
          item.removeEventListener("click", itemClick);
        });
      }
    });
  }

  // Страница Проекты
  // фильтр - секторы
  const selectProjectsSector = document.querySelector(
    "#projects-filter-sectors"
  );

  if (
    selectProjectsSector &&
    !selectProjectsSector.classList.contains("disabled")
  ) {
    document.body.addEventListener("click", (e) => {
      if (selectProjectsSector === e.target) {
        selectProjectsSector.classList.toggle("open");
      }
      if (!selectProjectsSector.contains(e.target)) {
        selectProjectsSector.classList.remove("open");
      }
    });
  }
  // фильтр - продукция
  const selectProjectsProducts = document.querySelector(
    "#projects-filter-products"
  );
  if (
    selectProjectsProducts &&
    !selectProjectsProducts.classList.contains("disabled")
  ) {
    document.body.addEventListener("click", (e) => {
      if (selectProjectsProducts === e.target) {
        selectProjectsProducts.classList.toggle("open");
      }
      if (!selectProjectsProducts.contains(e.target)) {
        selectProjectsProducts.classList.remove("open");
      }
    });
  }
  // вывод по количеству записей
  const selectProjectsAmount = document.querySelector(
    "#projects-and-sertificates-amount"
  );
  if (selectProjectsAmount) {
    selectProjectsAmount.addEventListener("click", (e) => {
      const items = selectProjectsAmount.querySelectorAll(".amount__item label");
      const projectssMainForm = document.querySelector("#projects-main-form");

      items.forEach((item) => {
        item.addEventListener("click", itemClick);
      });

      selectProjectsAmount.classList.toggle("open");

      function itemClick(e) {
        const count = e.currentTarget.dataset.mount;
        const input = e.target.querySelector("input");

        input.setAttribute("checked", true);
        projectssMainForm.submit();

        items.forEach((item) => {
          item.removeEventListener("click", itemClick);
        });
      }
    });
  }

  // Product-page tabs
  const productPageTabs = document.querySelector('.product-page .tabs');
  if (productPageTabs) {
    const tabs = productPageTabs.querySelectorAll('.tabs__item');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        (e.target.classList.contains('tabs__up') || e.target.classList.contains('tabs__title')) && tab.classList.toggle('visible');
      })
    })
  }
});
