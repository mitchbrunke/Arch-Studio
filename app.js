const numbers = document.querySelectorAll(".number");

//create active class on number
//loop through numbers

numbers.forEach((number) => {
  console.log(number);
  //add Event Listener for each number
  number.addEventListener("click", (e) => {
    console.log("You clicked it");
    //add active class
    number.classList.add("active");
  });
});
//remove active class??

//use active class to display slide (switch maybe?)
