/**
 * Operadores de comparação
 * 
 * Maior que: >
 * Maior que ou igual a: >=
 * Menor que: <
 * Menor que ou igual a: <=
 * Igualdade: ==
 * Idêntico (valor e tipo): ===
 * Diferente: !=
 * Diferente e não idêntico: !==
 */

console.log(10 > 10); // => false: 10 é maior que 10?
console.log(10 >= 10); // true: 10 é maior ou igual a 10?
console.log(5 < 10); // => true: 5 é menor que 10?
console.log(5 <= 2); // => false: 5 é menor ou igual a 2?
console.log(5 == 5); // => true: 5 é igual a 5?
console.log('5' === 5); // false: '5' (string) é idêntico a 5 (number)?
console.log('5' != 5); // false: '5' (string) é diferente de 5 (number)?
console.log('5' !== 5); // true: '5' (string) é diferente e não-idêntico a 5 (number)?