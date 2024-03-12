// What is a Data Type?
// A data type is an attribute of data that tells the compiler or interpreter how the programmer intends to use the data.
// It defines the operations that can be done on the data and the structure in which the data will be stored.

// JavaScript is a loosely typed or a dynamic language. Variables in JavaScript are not directly associated with any particular value type,
// and any variable can be assigned (and re-assigned) values of all types:

// JavaScript provides eight basic data types:

// 1. Undefined: a variable that has not been assigned a value has the value undefined
let a;
console.log(a); // Output: undefined

// 2. Null: a special keyword denoting a null value; null is considered a placeholder for an object that doesn't exist
let b = null;
console.log(b); // Output: null

// 3. Boolean: represents a logical entity and can have two values: true and false
let c = true;
console.log(c); // Output: true

// 4. Number: represents both integer and floating point numbers
let d = 42;
let e = 3.14;
console.log(d); // Output: 42
console.log(e); // Output: 3.14

// 5. BigInt: represents integers with arbitrary precision
let f = 123n;
console.log(f); // Output: 123n

// 6. String: represents a sequence of characters
let g = "Hello, World!";
console.log(g); // Output: "Hello, World!"

// 7. Symbol: a unique and immutable primitive value and may be used as the key of an Object property
let h = Symbol("symbol");
console.log(h); // Output: Symbol(symbol)

// 8. Object: represents instances of objects which can be a collection of properties
let i = { name: "John", age: 30 };
console.log(i); // Output: { name: "John", age: 30 }

// In addition to these basic types, JavaScript also supports complex data structures such as:
// - Array: a global object that is used in the construction of arrays; which are high-level, list-like objects.
let j = [1, 2, 3];
console.log(j); // Output: [1, 2, 3]

// - Function: a global object that is used in the construction of functions; which are callable objects.
function k() {
     return "I am a function.";
}
console.log(k()); // Output: "I am a function."

// - Date, RegExp, Error and more.

// Typeof Operator:
// The typeof operator can be used to find the type of a JavaScript variable.
console.log(typeof a); // Output: "undefined"
console.log(typeof b); // Output: "object" (this is a special case for historical reasons)
console.log(typeof c); // Output: "boolean"
console.log(typeof d); // Output: "number"
console.log(typeof f); // Output: "bigint"
console.log(typeof g); // Output: "string"
console.log(typeof h); // Output: "symbol"
console.log(typeof i); // Output: "object"
console.log(typeof j); // Output: "object" (Arrays are considered a type of object)
console.log(typeof k); // Output: "function"

// This is a basic overview of data types in JavaScript. Understanding the different data types is essential for the proper handling and operation of variables in JavaScript.
