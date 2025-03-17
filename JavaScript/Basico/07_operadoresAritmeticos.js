/**
 * Aritméticos
 * +
 * -
 * *
 * /
 * %
 * ***
 * 
 * Incremento / Decremento
 * ++
 * --
 */

const num1 = 5;
const num2 = 10;

console.log(num1 + num2); // 15
// Concatenação
console.log('5' + num2); // 510
console.log(num1 - num2); // -5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 0.5
console.log(num1 % num2); // 5

// Incremento
let contador = 1;
console.log(contador++); // 1
console.log(contador); // 2

contador = 1;
console.log(++contador); // 2
console.log(contador); // 2

// Decremento
contador = 1;
console.log(contador--); // 1
console.log(contador); // 0

contador = 1; 
console.log(--contador); // 0
console.log(contador); // 0

// Outra forma de incremento
contador = 1;
contador += 1; // contador = contador + 1
console.log(contador); // 2

contador *= 2; // contador = contador * 2
console.log(contador); // 4

