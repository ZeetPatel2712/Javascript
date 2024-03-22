// guess the number

const minNumber = 1;
const maxNumber = 10;
const randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
let guessNumber;
let loop = true;
let chances = 0;

while (loop) {
    guessNumber = Number(prompt(`Enter a number between ${minNumber} and ${maxNumber}`));

    if (isNaN(guessNumber)) {
        alert("Bro please enter a valid number");
    } else if (guessNumber > maxNumber || guessNumber < minNumber) {
        alert(`Bro please enter a value between ${minNumber} and ${maxNumber}`);
    } else if (guessNumber > randomNum) {
        chances++;
        alert("your guess is BIGGER then number guessed number");
    } else if (guessNumber < randomNum) {
        chances++;
        alert("your guess is SMALLER then number guessed number");
    } else {
        chances++;
        alert(`You guessed a perfect number in ${chances} chances`);
        loop = false;
    }
}
