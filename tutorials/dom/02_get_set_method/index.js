// to get and set text ----------- //

// textContent ------ //
// it's return element inner text
console.log(document.querySelector(".des_1").textContent);
document.querySelector(".des_1._set").textContent = "hello word";

// innerText
// it's return element inner text that only available on browser code
console.log(document.querySelector(".h1_title").innerText);
console.log(document.querySelector(".h1_title").textContent);

document.querySelector(".h1_title._set").innerText = "hello h1 title";

// to get and set html ----------- //
// it's return element inner html
console.log(document.querySelector(".des_2").innerHTML);
document.querySelector(".des_2._set").innerHTML = "hello <u>word</u>";

// to get and set attribute ----------- //

// get method ----- //

// attribute -- //
// it's return all attribute
console.log(document.querySelector(".home__h1-title").attributes);

// getAttribute -- //
// it's return attribute value
console.log(document.querySelector(".home__h1-title").getAttribute("id"));
console.log(document.querySelector(".home__h1-title").getAttribute("class"));
console.log(document.querySelector(".home__h1-title").getAttribute("style"));

// getAttributeNode -- //
// it's return attribute and value both
console.log(document.querySelector(".home__h1-title").getAttributeNode("id"));
console.log(document.querySelector(".home__h1-title").getAttributeNode("class"));
console.log(document.querySelector(".home__h1-title").getAttributeNode("style"));

// set method ----- //

// attribute -- //
document.querySelector(".home__h3-title").attributes[1].value = "home__h4-title";

// setAttribute -- //
// it's replace old attribute with new attribute
document.querySelector(".home__h1-title").setAttribute("id", "about__h1-title");
document.querySelector(".home__h1-title").setAttribute("style", "background:green; color: yellow; padding: 30px");

// removeAttribute -- //
document.querySelector(".home__h3-title").removeAttribute("style");
