// how to define an object -------------------- //

// 01 way one

const userInfo = {
    name: "John",
    age: 30,
    city: "New York",
};

// 02 way two
const childData = new Object();

childData.name = "John";
childData.age = 28;

console.log(childData);

// how to access object

// 01 way one
console.log(userInfo.name);

// 02 way two
console.log(userInfo["name"]);

// how to change object value and how to freeze object ---------------- //

const stuInfo = {
    name: "John",
    age: 30,
    city: "New York",
};

stuInfo.name = "Jack";
console.log(stuInfo.name);

Object.freeze(stuInfo);

stuInfo.age = 48;
console.log(stuInfo.age);
