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

// ================================================================= TYPES OF EVENT AND EVENT HANDLERS =================================================================
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
