let correctNumber: number = 7;
let guess: number = 1;
let attempts: number = 0;

for (let i: number = 1; i <= 10; i++) {
    attempts++;

    console.log("Attempt: " + attempts);
    console.log("Guess: " + guess);

    if (guess === correctNumber) {
        console.log("Correct number!");
        break;
    }

    guess++;
}

console.log("Total attempts = " + attempts);