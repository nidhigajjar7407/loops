let n: number = 7;
let a: number = 0;
let b: number = 1;
let c: number;

console.log(a);
console.log(b);

for (let i: number = 3; i <= n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}