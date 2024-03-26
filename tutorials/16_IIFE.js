// Immediately Invoked Function Expression (IIFE)

// IIFE with normal function

(function favHero(...hero) {
    /// This is named IIFE function
    console.log(hero.join(" | "));
})("batman", "superman"); // make sure if you write two iife function on one page please add ; sign end of the function

// IIFE with arrow function
// This is without name IIFE function
((...car) => console.log(`My favorite cars are ${car.join(" | ")}`))("supra", "BMW", "Audi");

// simple example of IIFE
((greeting) => console.log(`${greeting}}`))("hello");
