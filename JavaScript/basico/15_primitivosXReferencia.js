/* ***
 * Primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol).
 *
 * Referência (mutável): array, object, function 
 */

// Primitivos
let nome = 'Luiz';
nome = 'Otávio';
console.log(nome, nome[0]);
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia

console.log(a, b);
a = 'Outra coisa';
console.log(a, b);


// Referência
let listaNumeros = [1, 2, 3];
let outraLista = listaNumeros;
console.log(listaNumeros, outraLista);

listaNumeros.push(4)
console.log(listaNumeros, outraLista);

outraLista.pop();
console.log(listaNumeros, outraLista);