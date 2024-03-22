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

const spreadA = ["A", "B", "C", "D"];
const spreadB = ["E", "F", "G", "H"];
console.log([...spreadA, ...spreadB]);

// 08 join method
// it's join array value and convert into string -------------- //

const k = ["A", "B", "C"];
const _k = k.join("_");

console.log(_k, typeof _k);

// 09 slice method
// it's extract value from array ---------------- //

const l = ["A", "B", "C", "D"];
const _l = l.slice(1, 3);
const __l = l.slice(1);
const l_ = l.slice(-4, -1);
const l__ = l.slice(-2);
console.log(_l);
console.log(__l);
console.log(l__);

// 10 splice method
// it'a add and remove value from array -------------- //

const m = ["A", "B", "C", "G"];
m.splice(3, 0, "D", "E", "F"); // 0 for can't delete item and 1 for delete item
console.log(m);

// 11 isArray method
// it's check value is array or not

const n = ["A", "B", "C", "D"];

Array.isArray(n) ? console.log("It's array") : console.log("It's not array");

// 12 indexOf method
// It's check index of value in array

const o = ["A", "B", "A", "C", "D"];

console.log(o.indexOf("A"));
console.log(o.indexOf("A", 1));
console.log(o.indexOf("E"));

// 13 lastIndexOF method
// It's check last index of value in array

const p = ["A", "B", "A", "A", "D"];

console.log(p.lastIndexOf("A", 1));
console.log(p.lastIndexOf("A"));
console.log(p.lastIndexOf("E"));

// 14 includes method
// It's check value is in array and return and if value available on the array it's return true else it's return false

const q = ["A", "B", "A", "C", "D"];
console.log(q.includes("A"));
console.log(q.includes("Q"));

// 15 array flat method
// It's convert nested array into single array

const r = ["A", "B", "C", ["D", "E", "F", ["G", "H", "I"], "J", "K"], "l"];
const _r = r.flat(Infinity);

console.log(_r);

// 16 from method
// It's convert string into array

const s = "ABCDEF";
const _s = Array.from(s);

console.log(_s);
