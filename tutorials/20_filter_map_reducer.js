// filter method ------------------------- //
// filter return true or false based on condition
(() => {
    const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    myNum.filter((item) => console.log(item > 5));

    const myNumVal = myNum.filter((item) => item > 5);
    console.log(myNumVal);
})();

// map method ------------------------- //
// map return new array based on condition

(() => {
    const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    myNum.map((item) => console.log(item * 2));

    const myNumVal = myNum.map((item) => item * 2);
    console.log(myNumVal);
})();

// chaining method ------------------------- //
// we can use multiple method in single line

(() => {
    const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const myNumVal = myNum
        .map((item) => item * 2)
        .map((item) => item + 1)
        .filter((item) => item > 15);

    console.log(myNumVal);
})();

// reduce method --------------------------- //

(() => {
    const num = [1, 2, "3", "4", 5, 6, 7, "8", 9, 10];
    let convertedNum = [];

    num.filter((item) => {
        if (typeof item === "string") {
            console.log(item);
        }
    });
})();
