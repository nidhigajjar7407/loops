let n: number = 12321;
let temp: number = n;
let reverse: number = 0;
let digit: number;

while (temp > 0) {
    digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
}

if (n === reverse) {
    console.log(n + " is a Palindrome number");
} else {
    console.log(n + " is not a Palindrome number");
}