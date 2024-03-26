// parent element and parent node ------------------- //
const parentElement = document.querySelector(".ch-1.children1").parentElement;
console.log(parentElement);

const parentElementNode = document.querySelector(".ch-1.children1").parentNode;
console.log(parentElementNode);

// children element and children element node ------------------- //

const childrenElement = document.querySelector(".parent1").children;
console.log(childrenElement);

const childrenElementNode = document.querySelector(".parent1").childNodes;
console.log(childrenElementNode);

// first child method and first element child --------------- //
const firstChild = document.querySelector(".parent1").firstChild;
console.log(firstChild);

const firstElementChild = document.querySelector(".parent1").firstElementChild;
console.log(firstElementChild);

// last child and last element child method --------------- //
const lastChild = document.querySelector(".parent1").lastChild;
console.log(lastChild);

const lastElementChild = document.querySelector(".parent1").lastElementChild;
console.log(lastElementChild);

// next sibling and next element sibling method --------------- //

const nextSibling = document.querySelector(".parent1 .children2").nextSibling;
console.log(nextSibling);

const nextElementSibling = document.querySelector(".parent1 .children2").nextElementSibling;
console.log(nextElementSibling);

// previous sibling method --------------- //

const previousSibling = document.querySelector(".parent1 .children2").previousSibling;
console.log(previousSibling);

const previousElementSibling = document.querySelector(".parent1 .children2").previousElementSibling;
console.log(previousElementSibling);

// create element method --------------- //

// create text node method --------------- //
