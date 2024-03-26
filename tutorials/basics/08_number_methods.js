// Number method ---------- //
// It's convert string into number;
const num_1 = "20";
const num_2 = "20 30"; // if there is a space between string number it's return NaN

console.log(Number(num_1), typeof Number(num_1));
console.log(Number(num_2), typeof Number(num_2));

// parseInt method --------- //

const num_3 = "20";
const num_4 = "20 50 70"; // if there is a space between string number it's return first number value
const num_5 = "50.70.80"; // if there is a dot between string number it's return first number value
const num_6 = "50 year "; // if in the text first value is number and another is word it's return first value
const num_7 = "050"; // if in string number value start with 0 it's ignore 0 and show 0 after value
const num_8 = "year 50"; // if the first value is not a number it's return NaN

console.log(parseInt(num_3), typeof parseInt(num_3));
console.log(parseInt(num_4), typeof parseInt(num_4));
console.log(parseInt(num_5), typeof parseInt(num_5));
console.log(parseInt(num_6), typeof parseInt(num_6));
console.log(parseInt(num_7), typeof parseInt(num_7));
console.log(parseInt(num_8), typeof parseInt(num_8));

// parseFloat method ---------- //
// parseFloat is almost similar to parseInt
// difference is parseInt can't return point value but parseFloat return point value
const num_9 = "20.23";
const num_10 = "20 20 30";
const num_11 = "15 yearn";

console.log(parseFloat(num_9), typeof parseFloat(num_9));
console.log(parseFloat(num_10), typeof parseFloat(num_10));
console.log(parseFloat(num_11), typeof parseFloat(num_11));

// isFinite method ---------- //
// isFinite method is used to check if a value is a finite number.
// if the value is finite it's return true otherwise it's return false.

const num_12 = 100;
const num_13 = "100";
const num_14 = "Hello Word";
const num_15 = Infinity;

console.log(isFinite(num_12));
console.log(isFinite(num_13));
console.log(isFinite(num_14));
console.log(isFinite(num_15));

// isInteger method ---------- //
// if the value is integer it's return true otherwise it's return false.

const num_16 = Infinity;
const num_17 = "200";
const num_18 = 200;
const num_19 = 10.3;
const num_20 = true;

console.log(Number.isInteger(num_16));
console.log(Number.isInteger(num_17));
console.log(Number.isInteger(num_18));
console.log(Number.isInteger(num_19));
console.log(Number.isInteger(num_20));

// toFixed
// toFixed method is used to convert a number to a string with a specified number of decimals.

const num_21 = 10.23456;
const num_22 = 10.23456;

console.log(num_21.toFixed(2));
console.log(num_22.toFixed(4));
console.log(num_21.toFixed(10));

// toPrecision
// toPrecision method is used to convert a number to a string with a specified number of significant digits.

const num_23 = 10.23456;
const num_24 = 10.23456;

console.log(num_23.toPrecision(2));
console.log(num_24.toPrecision(4));
console.log(num_24.toPrecision(6));
console.log(num_24.toPrecision(10));
