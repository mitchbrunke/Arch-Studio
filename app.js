//nav
const navIcon = document.getElementById("burger");
const burger = document.querySelector(".mobile-nav");
const mobileNav = document.querySelector(".mob-nav-container");

//slider

const numbers = document.querySelectorAll(".number");
const slideController = document.querySelector(".numbers");
const playSlideOne = document.getElementById("one");
const playSlideTwo = document.getElementById("two");
const playSlideThree = document.getElementById("three");
const playSlideFour = document.getElementById("four");
const slideOne = document.querySelector(".slide1");
const slideTwo = document.querySelector(".slide2");
const slideThree = document.querySelector(".slide3");
const slideFour = document.querySelector(".slide4");

//nav functions

//slider functions

//if active class exists, delete it

removeActive = () => {
  numbers.forEach((number) => {
    if (number.classList.contains("active")) {
      number.classList.remove("active");
    }
  });
};
// add active class on click

addActive = (e) => {
  removeActive();
  e.target.classList.add("active");
  activateSlide(e);
};

//use active class to display slide

activateSlide = (e) => {
  if (playSlideOne.classList.contains("active")) {
    console.log("slide one is active");
    slideOne.style.display = "flex";
    slideTwo.style.display = "none";
    slideThree.style.display = "none";
    slideFour.style.display = "none";
  } else if (playSlideTwo.classList.contains("active")) {
    console.log("slide two is active");
    slideOne.style.display = "none";
    slideTwo.style.display = "flex";
    slideThree.style.display = "none";
    slideFour.style.display = "none";
  } else if (playSlideThree.classList.contains("active")) {
    console.log("slide three is active");
    slideOne.style.display = "none";
    slideTwo.style.display = "none";
    slideThree.style.display = "flex";
    slideFour.style.display = "none";
  } else if (playSlideFour.classList.contains("active")) {
    console.log("slide four is active");
    slideOne.style.display = "none";
    slideTwo.style.display = "none";
    slideThree.style.display = "none";
    slideFour.style.display = "flex";
  }
};
//add event listeners

burger.addEventListener("click", (e) => {
  mobileNav.classList.toggle("open-nav");
  if (mobileNav.classList.contains("open-nav")) {
    console.log("the nav is open");
    mobileNav.style.display = "block";
    navIcon.src = "/assets/icons/icon-close.svg";
  } else {
    mobileNav.style.display = "none";
    console.log("the nav is closed");
    navIcon.src = "/assets/icons/icon-hamburger.svg";
  }
});

slideController.addEventListener("click", addActive);
