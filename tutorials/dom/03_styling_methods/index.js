// using style method ----------- //
const box_1 = document.querySelector(".home__box-1");
box_1.style.background = "salmon";
box_1.style.padding = "40px";
box_1.style.border = "10px solid deeppink";

// using className method ----------- //

const box_2 = document.querySelector("#home__box-2");
box_2.className = "home__box-3";

// using classList method ----------- //

const box_4 = document.querySelector(".home__box-4");
box_4.classList.add("home__box-5");
