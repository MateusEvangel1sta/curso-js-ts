let numeroUm = 9.54578; // float

let numeroDois = Math.floor(numeroUm); // Arredondando para baixo
console.log(numeroDois);

numeroDois = Math.ceil(numeroUm); // Arredondando para cima
console.log(numeroDois)

numeroDois = Math.round(numeroUm); // Arredondando para o mais próximo
console.log(numeroDois);

console.log(Math.max(1, 2, 3, 4, -50, -12, 10)); // Retorna o maior valores

console.log(Math.min(1, 2, 3, 4, -50, -12, 10)); // Retorna o menor valores

console.log(Math.random()); // Gera um número aleatório entre 0 e 1


const aleatório = Math.round(Math.random() * (10 - 5) + 5); // Gera um número aleatório entre 5 e 10.
console.log(aleatório); // => Número aleatório

console.log(Math.PI); // Valor de PI
console.log(Math.pow(2, 10)); //  Potência

numeroUm = 9;
console.log(numeroUm ** (1/2)); // Raiz quadrada
console.log(Math.sqrt(numeroUm)); // Raiz quadrada

console.log(100 / 0); // => infinty: isso aqui aponta para true!
console.log(!!Infinity); // => true