console.log(5 == "5"); // true, because it's a loose comparison
console.log(5 != "8"); // true
console.log(5 === "5"); // false, because it's a strict comparison
console.log(5 !== "5"); // true
console.log(10 > 5); // true
console.log(5 >= 5); // true
console.log(3 < 6); // true
console.log(5 <= 5); // true
console.log(true && false); // false
console.log(5 > 3 && 10 < 12); // true
console.log(true || false); // true
console.log(5 > 8 || 10 < 12); // true
console.log(!true); // false
console.log(!(5 > 10)); // true
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive a car.");
} else {
    console.log("You are not allowed to drive a car.");
}
