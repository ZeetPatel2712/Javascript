// how to destructure object

const userInfo = {
    name: "John",
    email: "john@gmail.com",
    age: 28,
    fullName: {
        fname: "Jack",
        lname: "Deo",
    },
};

// way one
const { name, email, age } = userInfo;
console.log(name, email, age);

// way two
const { name: na, email: em, age: ag } = userInfo;
console.log(na, em, ag);

// destructure nested object

const { fullName } = userInfo;
const { fname, lname } = fullName;

console.log(fname, lname);

// spread object

console.log({ ...userInfo });
