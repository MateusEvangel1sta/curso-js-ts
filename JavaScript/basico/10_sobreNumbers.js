// IEEE 754-2008

let numeroUm = 1; // int
let numeroDois = 2.5; // float

console.log(numeroUm.toString() + numeroDois); // => 12.5 : NumeroUm foi convertido para STRING
console.log(typeof numeroUm); // => Number: A variável foi convertida para STRING apenas no código acima.

numeroUm = 1500;
console.log(numeroUm.toString(2)); // => 1010: versão binária.

numeroUm = 10.345677654321;
console.log(numeroUm.toFixed(2)); // => 10.34: número de casas decimais

console.log(Number.isInteger(numeroUm)); // => false: número não é mais um inteiro.

let temp = numeroUm * 'Olá';
console.log(temp); // => NaN
console.log(isNaN(temp)); // => true: É um NaN

// Imprecisões
// a)
numeroUm = 0.7;
numeroDois = 0.1;

console.log(numeroUm + numeroDois); // => .799999...

numeroUm += numeroDois;
numeroUm += numeroDois;
numeroUm += numeroDois;

console.log(numeroUm); // => 0.99999...
console.log(parseFloat(numeroUm.toFixed(2))); // => 1: uma solução

numeroUm = ((numeroUm * 100) + (numeroDois * 100)) / 100; // => 1: outra solução

// b)
console.log(Number.isInteger(1.00)) // => true: 1.0, por ser redondo, é considerado um número inteiro.
console.log(Number.isInteger(1.01)); // => false: número não é redondo.