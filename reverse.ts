let n: number = 48256;
let reverse: number = 0;
let digit: number;

do {
    digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
} while (n > 0);

console.log("Reversed number = " + reverse);