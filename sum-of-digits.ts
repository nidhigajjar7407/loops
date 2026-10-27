let n: number = 4578;
let sum: number = 0;
let digit: number;

do {
    digit = n % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);
} while (n > 0);

console.log("Sum of digits = " + sum);