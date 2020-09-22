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

//active class exists on slide 1. delete it

removeActive = () =>
  numbers.forEach((number) => {
    number.classList.remove("active");
  });

// add active class on click

addActive = (e) => {
  removeActive();
  e.target.classList.add("active");
  activateSlide();
};

//use active class to display slide (switch maybe?)

activateSlide = () => {
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

slideController.addEventListener("click", addActive);
