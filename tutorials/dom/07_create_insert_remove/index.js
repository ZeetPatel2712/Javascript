// create methods -------------------------------------- //

// to create a tag on html using js
const newElement = document.createElement("div");
console.log("🚀 ~ newElement:", newElement);

// create text node ------------------ //
// to create text node on html using js
const newText = document.createTextNode("Hello World");
console.log("🚀 ~ newText:", newText);

// crate comment ------------------ //
// to create comment on html using js
const newComment = document.createComment("This is a comment");
console.log("🚀 ~ newComment:", newComment);

// create and insert method ----------------------------- //

const body = document.querySelector("body");
const newElement2 = "<h1></h1>";

/// there is a 4 value
// - beforebegin
// - afterbegin
// - beforeend
// - afterend

body.insertAdjacentHTML("afterbegin", newElement2);

// replace and remove method ----------------------------- //

const list = document.querySelector(".list");

// replace method

const oldListElement = document.querySelector(".list").firstElementChild;
const newListElement = document.createElement("li");
newListElement.className = "list_item_4";
newListElement.textContent = "Hello Word";
list.replaceChild(newListElement, oldListElement);

// remove method

const removeListElement = document.querySelector(".list").lastElementChild;
list.removeChild(removeListElement);
