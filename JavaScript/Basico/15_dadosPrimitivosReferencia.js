/**
 * Primitivos (imutáveis) - string, number, boolean, undefined, null, bigint e symbol
 */
let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);

nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); // A alteração ocorre apenas na variável a.


/**
 * Referência (mutável) - array, object, function
 */
let c = [1, 2, 3];
let d = c;

console.log(c, d);

d.push(4);

console.log(c);

