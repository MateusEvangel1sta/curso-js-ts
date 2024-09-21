/**
 * Operadores Lógicos
 * && -> AND -> E (Todos precisão ser true)
 * || -> OR -> OU (Apenas um true)
 * ! -> NOT -> NÃO (Inversão true/false)
 */

console.log(10 == 10 && 5 == 5); // => true: todos são verdadeiros
console.log(11 == 10 && 8 > 1); // => false: apenas temos um verdadeiros
console.log(10 != 10 && 5 != 5); // => false: todos são falsos

console.log(4 > 3 || 10 == 10); // => true: todas as condições são verdadeiras
console.log(11 <= 15 || 10 !== 10); // true: uma condição é verdadeira
console.log('54' === 54 || '52' !== '52'); // false: todas são falsos

console.log(!true); // => false: inverte o valor
console.log(!false); // => true: inverte o valor
console.log(!('55' !== '55')); // => true: o valor foi invertido