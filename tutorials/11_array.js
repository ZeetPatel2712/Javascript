// how to define an array ---------------------------------- //

// 01 method 1
const favHeros = ["Spiderman", "Superman", "Batman"];

// 02 method 2
const myFavHeros = new Array();

myFavHeros[0] = "Spiderman";
myFavHeros[1] = "Bat man";
myFavHeros[2] = "Superman";

delete myFavHeros[1];

console.log(favHeros);
console.log(myFavHeros);

// array methods ----------------------------------------- //

// 01 sort method -------------- //
// It's sort array value

const a = ["A", "C", "E", "B", "D"];
console.log(a.sort());

// 02 revers method
// it's reverse array value -------------- //

const b = ["E", "D", "C", "B", "A"];
console.log(a.reverse());

// 03 pop method
// it's remove last array value -------------- //

const c = ["A", "B", "C"];
const _c = c.pop();

console.log(c);

// 04 push method
//  it's add last array value -------------- //

const d = ["A", "B", "C"];
const _d = d.push("D");

console.log(d);

// 05 shift method
// it's remove first array value -------------- //

const e = ["A", "B", "C"];
const _e = e.shift();

console.log(e);

// 06 unshift method
const f = ["A", "B", "C"];
const _f = f.unshift("D");

console.log(f);

// 07 concat method
// it's concat value on array -------------- //

const g = ["A", "B"];
const h = ["C", "D"];
const i = g.concat(h);
const j = g.concat(h, "E", "F");

console.log(i);
console.log(j);

// 08 join method
// it's join array value and convert into string -------------- //

const k = ["A", "B", "C"];
const _k = k.join("_");

console.log(_k, typeof _k);
