let n: number = 153;
let temp: number = n;
let sum: number = 0;
let digit: number;

while (temp > 0) {
    digit = temp % 10;
    sum = sum + (digit * digit * digit);
    temp = Math.floor(temp / 10);
}

if (sum === n) {
    console.log(n + " is an Armstrong number");
} else {
    console.log(n + " is not an Armstrong number");
}