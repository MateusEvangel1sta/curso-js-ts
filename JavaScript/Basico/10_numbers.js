let num1 = 1; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2); // 3.5
console.log(typeof num1);

num1 = 10.58967895843;
console.log(num1.toFixed(2)); // 10.59

num1 = 10;
console.log(Number.isInteger(num1)); // true

num1 = 10.5;
console.log(Number.isInteger(num1)); // false

let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); // true

// IEEE 754-2008
num1 = 0.7;
num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;

// Resolution of the problem
console.log(Number(num1.toFixed(2))); // 1