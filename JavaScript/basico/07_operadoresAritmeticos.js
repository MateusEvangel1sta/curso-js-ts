/* *** Operadores Artiméticos (Seguindo ordem de precedência) ***
 * => Prioridade: ()
 * => Exponenciação: **
 * => Multiplicação: *
 * => Divisão: /
 * => Módulo (Resto da Divisão): % 
 * => Adicão/Concatenação: +
 * => Subtração: -
 */

const numeroUm = 5;
const numeroDois = 10;

console.log((numeroUm + numeroDois) / numeroUm);
console.log(numeroDois ** numeroUm);
console.log(numeroDois * numeroUm);
console.log(numeroDois / numeroUm);
console.log(numeroDois % numeroUm);
console.log(numeroUm + numeroDois);
console.log(numeroUm - numeroDois);


// *** Incremento / Decremento ***
let contador = 0;
contador++; // Primeiro retorna o valor, depois incrementa.
++contador; // Primeiro incrementa o valor, depois retorna.
console.log(contador);

contador--;
--contador;
console.log(contador);

console.log(contador++); // 0
console.log(contador);  // 1

console.log(--contador); // 0
console.log(contador)

// *** Atribuiçao ***
contador += 5; // A mesma coisa que `contador = contador + 5`
contador -= 3;
contador *= 10;

console.log(contador);


// NaN (Not a Number) -> Isso demonstra que aconteceu algum erro em sua conta.
const numeroTres = 10;
const numeroQuatro = 'Luiz';
const numetoCinco = '5';
console.log(numeroTres * numeroQuatro);
console.log(numeroTres * numetoCinco); // O JS é inteligente o suficiente para saber que dentro dessa string existe um número, portanto, dará certo.

// Concatenação -> Number + String -> Concatenação
console.log(numeroTres + numeroQuatro)