// how to define arrow function --------------------------------- //

// arrow function with return. if you wan't to write return type then use {} bracket
const colors = (...color) => {
    return `${color.join(" | ")}`;
};

console.log(colors("red", "blue", "green"));

// arrow function without return type. if you don't want to write return type then use () bracket

const favCars = (...cars) => `${cars.join(" | ")}`;

console.log(favCars("supra", "dodge", "BMW"));

// how to return object on arrow function

const studentInfo = () => ({
    name: "John",
    age: 18,
    rollNum: 20,
});

console.log(studentInfo());
