let n: number = 9;
let count: number = 0;

for (let i: number = 1; i <= n; i++) {
    if (n % i === 0) {
        count++;
    }
}

if (count === 2) {
    console.log(n + " is a Prime number");
} else {
    console.log(n + " is not a Prime number");
}