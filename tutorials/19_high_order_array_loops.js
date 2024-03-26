// for of loop -------------------------------------- //
// using for of loop we can iterate array and string values //
(() => {
    const favHeros = ["spiderman", "superman", "batman"];

    // It's return array items from array //
    // In my case it's spiderman, superman and batman
    for (const hero of favHeros) {
        console.log(`my favorite hero is ${hero}`);
    }

    // it's also working with string values //
    const myFavHero = "Batman";
    let heroName = [];

    for (const favHero of myFavHero) {
        heroName.push(favHero);
    }

    console.log(heroName);
})();
// It's not working with object.

// for in loop -------------------------------------- //
// using for in loop we can iterate index number from array and string and return keys from object //
(() => {
    const favHeros = ["spiderman", "superman", "batman"];

    for (const hero in favHeros) {
        console.log(` ${hero} :- ${favHeros[hero]}`);
    }

    const heroInfo = {
        id: 0,
        name: "batman",
        age: 30,
        movie: "the dark knight",
    };

    for (const info in heroInfo) {
        console.log(` ${info} :- ${heroInfo[info]} `);
    }

    const myFavHero = "Batman";

    for (const i in myFavHero) {
        console.log(`${i} :- ${myFavHero[i]}`);
    }
})();

// for each loop -------------------------------------- //
// using for each loop we can iterate array values in easy way compare to for of and for in loop //

// REMEMBER :- for each can't return a value

(() => {
    const favHero = ["spiderman", "superman", "batman"];

    favHero.forEach((item, index) => {
        console.log(`${index} :- ${item}`);
    });

    const myFavHeroVal = favHero.forEach((item, index) => item);
    console.log(myFavHeroVal);
})();
