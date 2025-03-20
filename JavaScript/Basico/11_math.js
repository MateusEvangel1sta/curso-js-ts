let num1 = 9.54578;
// let num2 = Math.floor(num1); //Arredonda para baixo
// let num2 = Math.ceil(num1); //Arredonda para cima
let num2 = Math.round(num1); // Arredonda para o mais próximo
console.log(num2); // 9

console.log(Math.max(1, 2, 3, -53, -32, 1500, 9, 10, 234)); // 1500
console.log(Math.max(1, 2, 3, -53, -32, 1500, 9, 10, 234)); // 1500

const aleatorio = Math.random() * (10 - 5) + 5; // Gera um número aleatório entre 0 e 1
console.log(Math.round(aleatorio));

console.log(Math.PI); // 3.141592653589793
console.log(Math.pow(2, 10)); // 1024
console.log(2 ** 10); // 1024


// Raiz quadrada
console.log(9 ** (1/2));
console.log(9 ** 0.5);

// Vai entender...
console.log(100 / 0); // Infinity