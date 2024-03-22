// how to define a function --------------------------------- //

const sumTwo = (a, b) => a + b;
const ans = sumTwo(5, 5);

console.log(ans);
console.log(sumTwo(10, 10));

// function with default value --------------------------------- //

const sumThree = (a = 2, b = 2, c = 2) => a + b + c;

console.log(sumThree());
console.log(sumThree(10, 10, 10));

// function with spread operators --------------------------------- //

const studentName = (...name) => {
    return name;
};

console.log(studentName("john", "jack", "jimmy"));

// how to define a object into function --------------------------------- //

const hero = {
    name: "bat man",
    age: 30,
    movie: "the dark knight",
};

const batMan = (h) =>
    `hy there my favorite super hero is ${h.name} and his age is ${h.age} and his favorite movie is ${h.movie}`;

console.log(batMan(hero));

// how to define a array into a function --------------------------------- //

const favHeros = ["batman", "superman", "spiderman"];

const myFavHeros = (heros) => `my favorite heros are ${heros.join(" | ")}`;

console.log(myFavHeros(favHeros));
