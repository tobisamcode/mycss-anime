"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////////////////////////////////////

// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent =
//   "we use cooies for improve functionalities and analytics! ✨";
message.innerHTML =
  'we use cooies for improve functionalities and analytics! ✨ <button class="btn btn--close-cookie">Got it!</button> ';

// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// DELETE Elements
// document.querySelector(".btn--close-cookie").addEventListener("click", () => {
//   // message.remove();
//   message.parentElement.removeChild(message);
// });

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "100%";

console.log(message.style.width);

console.log(getComputedStyle(message).height);

message.style.height = parseFloat(getComputedStyle(message).height) + 40 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

//Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.getAttribute("alt"));

console.log(logo.src);
console.log(logo.getAttribute("src"));

console.log(logo.className);

// classes
logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c");

// =================================================================  IMPLEMENTING SMOOTH SCROLLING =================================================================
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
  const s1cords = section1.getBoundingClientRect();

  console.log(s1cords);
  console.log(e.target.getBoundingClientRect());

  // To get current Scroll (X,Y) position
  console.log("current scroll (x,y)", window.pageXOffset, window.pageYOffset);

  // To get current viewport position
  console.log(
    "(width, height)",
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );

  // Scrolling
  // window.scrollTo(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// =========================================== TYPES OF EVENT AND EVENT HANDLERS =================================================================
const h1 = document.querySelector("h1");

const alertH1 = (e) => {
  alert("addEventLister: You are reading the heading ☺️");
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => {
  h1.removeEventListener("mouseenter", alertH1);
}, 3000);

// h1.onmouseenter = (e) => {
//   alert("addEventLister: You are reading the heading ☺️");
// };

// =========================================================== BUBBLING AND CAPTURING --- event propagation =================================================================
// EVENT DELEGATION - PAGE NAVIGATION
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// ================================================ DOM Traversing =============================================

const head = document.querySelector("h1");

// Going downwards: child
console.log(head.querySelectorAll(".highlight"));
console.log("childNodes", head.childNodes);
console.log("children", head.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going forwards: parents
console.log(head.parentNode);
console.log(head.parentElement);

// ================================================================= Building Tab Component =================================================================

// TAB Component
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Active tab
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((tabContent) =>
    tabContent.classList.remove("operations__content--active")
  );
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// ================================================ MENU FADE ANIMATION =================================
const nav = document.querySelector(".nav");

function handleHover(e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    console.log("link: ", link);
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    console.log("siblings: ", siblings);
    const logo = link.closest(".nav").querySelector("img");
    console.log("logo: ", logo);

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// ==================== STICKY NAVICATION =======================================================
// const initailCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function (e) {
//   console.log(this.window.scrollY);
//   if (this.window.scrollY > initailCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

// ==================== STICKY NAVICATION : Intersection Observer API ======================
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2], // 0.1 means 10% of the target element is visible in the viewport
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const headerHeight = nav.getBoundingClientRect().height;

console.log("headerHeight", headerHeight);

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

headerObserver.observe(header);

// =================================== Revealing Sections on scroll ===================================

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15, // 15% of the target element is visible in the viewport
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

// ========================== Lazy Loading Images ============================

const images = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

images.forEach((img) => imgObserver.observe(img));

// ===================================================== SLIDER =============================================
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotsContainer = document.querySelector(".dots");

  let currentSlide = 0;
  const maxSlides = slides.length;

  // FGUNCTIONS
  const createDots = function () {
    slides.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class='dots__dot' data-slide="${i}"></button>`
      );
    });
  };

  const activateDots = (slide) => {
    const dots = document.querySelectorAll(".dots__dot");
    dots.forEach((dot) => dot.classList.remove("dots__dot--active"));
    dots[slide].classList.add("dots__dot--active");
  };

  function goToSlide(slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  }

  // NEXT SLIDE
  const nextSlide = function () {
    if (currentSlide === maxSlides - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDots(currentSlide);
  };

  // PREVIOUS SLIDE
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlides - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDots(currentSlide);
  };

  function Init() {
    goToSlide(currentSlide);
    createDots();
    activateDots(currentSlide);
  }
  Init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDots(slide);
    }
  });
};

slider();
