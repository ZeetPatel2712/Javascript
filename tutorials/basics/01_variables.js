// What is a Variable?
// A variable in programming is a storage location paired with an associated symbolic name (an identifier),
// which contains some known or unknown quantity of information referred to as a value.

// The variable name is the way we refer to this stored value, within our program.

// In JavaScript, there are three primary types of variables:

// 1. var: The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
// Example:
var globalVar = "I am a global variable because I am not inside a function.";

function exampleFunction() {
     var functionScopedVar = "I am function-scoped because I am defined inside a function.";
}

// 2. let: The let statement declares a block-scoped local variable, optionally initializing it to a value.
// Example:
let blockScopedVar = "I am block-scoped, which means I exist only within the nearest set of curly braces {}.";

if (true) {
     let anotherBlockScopedVar = "I am also block-scoped, existing only within this if-statement block.";
}

// 3. const: The const statement declares a block-scoped variable that cannot be reassigned.
// Example:
const constantVar = "I am a constant and cannot be reassigned to a different value.";

// Note: const does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.
// For instance, in the case of an object, the object's properties can still be changed.

// Additional Information About Variables:
// - Variable names in JavaScript can contain letters, digits, underscores, and dollar signs.
// - Variable names must begin with a letter, an underscore (_), or a dollar sign ($).
// - Variable names are case-sensitive (e.g., "myVariable" and "myvariable" are two different variables).
// - There are also naming conventions, such as camelCase, which is commonly used in JavaScript.

// Example of camelCase:
let myVariableName = "This is a camelCase example.";

// Variables can also store different types of values, such as:
let stringValue = "Hello, World!"; // String
let numberValue = 42; // Number
let booleanValue = true; // Boolean
let nullValue = null; // Null
let undefinedValue; // Undefined (no value is assigned)
let objectValue = {
     // Object
     property: "value",
};
let arrayValue = [1, 2, 3]; // Array
let functionValue = function () {
     // Function
     return "I am a function.";
};

// This is a basic overview of variables in JavaScript. Variables are fundamental to most programming languages,
// and understanding how to use them effectively is crucial for writing clear and efficient code.
