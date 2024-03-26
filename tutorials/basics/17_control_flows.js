// control flow ----------------------- //

// if and else statement ----------- //
(() => {
    const isLoggedIn = true;

    // way one

    if (isLoggedIn) {
        console.log("user is logged in");
    }

    // way two

    if (isLoggedIn) console.log("user is logged in again");

    // if else statement ------------ //

    const studentMark = 80;

    if (studentMark > 80) {
        console.log("A Grade");
    } else {
        console.log("B Grade");
    }

    // nested if else statement ------------ //

    const studentMark2 = 82;

    if (isNaN(studentMark2)) {
        console.log("Please enter a valid mark");
    } else {
        if (studentMark2 > 80) {
            console.log("A Grade");
        } else {
            console.log("B Grade");
        }
    }
})();

// switch case statement ---------- //
(() => {
    // example one ------- //
    (() => {
        const day = 2;

        switch (day) {
            case 0:
                console.log("Sunday");
                break;

            case 1:
                console.log("Monday");
                break;

            case 2:
                console.log("Tuesday");
                break;

            case 3:
                console.log("Wednesday");
                break;

            default:
                console.log("Another Days");
                break;
        }
    })();

    // example two ------- //
    (() => {
        const mark = 20;

        switch (true) {
            case mark > 100:
                console.log("please enter valid mark");
                break;

            case mark > 80:
                console.log("A grade");
                break;

            case mark > 70:
                console.log("B grade");
                break;

            case mark > 50:
                console.log("C grade");
                break;

            default:
                console.log("Fail");
                break;
        }
    })();
})();

// truthy value and falsy value -------- //

(() => {
    // what is truthy value and falsy value ?
    // for example

    const name = "hello";
    // in this condition i can't check a condition so how i know it's return true or false
    name ? console.log(name) : console.log("name not define");

    // it's happen because of truthy and falsy value

    // truthy value
    // true, "hello", [], {}, function(){}

    // falsy value
    // false, 0, -0, BigInt(0), NaN, null, undefined, "", Symbol()
})();

// Nullish Coalescing Operator (??) -------- //

(() => {
    // this operator works when the default value is null or undefined.
    // this operator mostly use when we fetch data from the server.

    let name = null ?? "hello";
    console.log(name);

    let name2 = undefined ?? "hy there";
    console.log(name2);
})();

// ternary operator --------------- //

(() => {
    // yo know very well how to use it 😉
    const age = 20;

    age > 18 ? console.log("you are adult") : console.log("you are not adult");
})();
