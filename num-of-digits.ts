let n: number = 46867;
let count: number = 0;

while (n > 0) {
    n = Math.floor(n / 10);
    count++;
}

console.log("Number of digits = " + count);