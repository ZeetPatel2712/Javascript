const start_btn = document.querySelector("#start_btn");
const prev_end_btn = document.querySelectorAll("#prev_end_btn");
const end_btn = document.querySelector("#previous_btn");
const numbers = document.querySelectorAll(".links a");

let currentStep = 0;

numbers.forEach((number, index) => {
     number.addEventListener("click", () => {
          currentStep = index;
          document.querySelector(".active")?.classList.remove("active");
          number.classList.add("active");
     });
});
