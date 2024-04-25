// how to define a promise

// way one using variable
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("hello word");
        resolve();
    }, 4000);
});

promiseOne.then(() => console.log("code resolved"));

// way 2 without using variable
new Promise((res, rej) => {
    setTimeout(() => {
        console.log("hello hello hello");
        res();
    }, 500);
}).then(() => console.log("promise solo resolved"));

// --------------------------------- how to pass data in the promise -------------------------- //

const promiseSecond = new Promise((res, rej) => {
    var userInfo = {
        name: "john",
        age: 20,
        city: "New York",
    };
    console.log(userInfo.name);
    res(userInfo);
});

promiseSecond.then((userInfo) => {
    console.log(userInfo);
});

// --------------------------------- how to use resolve and reject both -------------------------- //

new Promise((res, rej) => {
    let error = true;
    error ? res("success") : rej("error");
})
    .then((ans) => console.log(ans))
    .catch((ans) => console.log(ans));

// --------------------------------- promise chaining -------------------------- //

const promiseChain = new Promise((res, rej) => {
    let error = true;
    error ? res("success chain") : rej("error chain");
});

promiseChain
    .then((res) => {
        if (typeof res === "string") {
            return true;
        } else {
            return false;
        }
    })
    .then((res) => {
        res ? console.log("Green") : console.log("red");
    })
    .catch((res) => {
        console.log(res);
    });

// ------------------------------------ use finally ---------------------------------- //

new Promise((res, rej) => {
    let error = true;
    error ? res("success chained") : rej("error chained");
})
    .then((res) => console.log(res))
    .catch((res) => console.log(res))
    .finally(() => console.log("finally done"));

// ------------------------------------ fetch data from api using promise ---------------------------------- //

const fetchData = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((res) => console.log(res));
