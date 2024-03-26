// Loops --------------------------------------- //

// for loop
(() => {
    // basic for loop
    for (let i = 1; i <= 3; i++) {
        console.log(i);
    }

    // inner for loop
    for (let outer = 1; outer <= 5; outer++) {
        for (let inner = 1; inner <= 3; inner++) {
            console.log(outer, inner);
        }
    }

    // break
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            // we can write code here

            break; /// it's break loop if i value is 3
        }
        console.log("break", i);
    }

    // continue
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            // we can write code here

            continue; /// it's remove loop if i value is 3
        }
        console.log("continue", i);
    }
})();

// while loop

let index = 0;
while (index <= 10) {
    console.log(`hello ${index}`);
    index += 5;
}

// do while loop

let index2 = 0;
do {
    console.log(index2);
    index2 += 5;
} while (index2 <= 10);
