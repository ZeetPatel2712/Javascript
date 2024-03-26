// DOM targeting methods ---------------------------------- //

// using id ---------- //
console.log(document.getElementById("h1__title").id);

// using class name ---------- //
console.log(document.getElementsByClassName("h2__title")[0].className);

// using tag name --------- //
console.log(document.getElementsByTagName("p")[0].textContent.trim());

// using query selector --------- //

console.log(document.querySelector("#h1__title"));
console.log(document.querySelector(".h2__title"));
console.log(document.querySelector("p"));

// using query selector all --------- //
console.log(document.querySelectorAll("#list .list_item"));
console.log(document.querySelectorAll("#list .list_item")[3].textContent);
