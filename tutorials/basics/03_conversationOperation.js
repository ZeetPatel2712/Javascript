// What is Type Conversion?
// Type conversion (or type coercion) in JavaScript refers to changing the data type of a value to another.
// This can be done implicitly by JavaScript itself or explicitly by the programmer.

// Implicit Conversion - Automatic type conversion done by JavaScript when it expects a certain data type.
// Example:
let implicitConversion = "5" + 2; // The number 2 is concatenated to the string '5', resulting in the string '52'.
console.log(implicitConversion); // Output: '52'

// Explicit Conversion - When the programmer intentionally converts values from one type to another.
// This can be done using built-in functions like String(), Number(), and Boolean().

// String Conversion:
// Converting to a string explicitly can be done using the String() function or the .toString() method.
let num = 123;
let explicitString = String(num);
console.log(explicitString); // Output: '123'

let bool = true;
let boolToString = bool.toString();
console.log(boolToString); // Output: 'true'

// Number Conversion:
// Converting to a number explicitly can be done using the Number() function or the unary plus (+) operator.
let str = "456";
let explicitNumber = Number(str);
console.log(explicitNumber); // Output: 456

let strToNum = +"456";
console.log(strToNum); // Output: 456

// Boolean Conversion:
// Converting to a boolean explicitly can be done using the Boolean() function.
// Falsy values (0, '', null, undefined, NaN, false) convert to false, others convert to true.
let zero = 0;
let emptyStr = "";
let explicitBooleanZero = Boolean(zero);
let explicitBooleanEmptyStr = Boolean(emptyStr);
console.log(explicitBooleanZero); // Output: false
console.log(explicitBooleanEmptyStr); // Output: false

let nonEmptyStr = "hello";
let explicitBooleanNonEmptyStr = Boolean(nonEmptyStr);
console.log(explicitBooleanNonEmptyStr); // Output: true

// Parsing Numbers from Strings:
// parseInt() and parseFloat() functions parse a string and return an integer or floating-point number.
let floatStr = "3.14";
let intStr = "100px"; // parseInt can handle trailing non-numeric characters
let parsedInt = parseInt(intStr);
let parsedFloat = parseFloat(floatStr);
console.log(parsedInt); // Output: 100
console.log(parsedFloat); // Output: 3.14

// Type Conversion in Comparisons:
// When comparing values of different types, JavaScript converts the values to numbers.
let comparisonResult = "5" == 5; // true, because '5' is converted to 5 before comparison
console.log(comparisonResult);

// It is recommended to use the strict equality operator (===) to avoid implicit type coercion in comparisons.
let strictComparisonResult = "5" === 5; // false, because the types are different
console.log(strictComparisonResult);

// This is a basic overview of conversion operations in JavaScript. Understanding how to convert between different data types is important for writing robust and predictable code, especially when dealing with user input or external data sources.
