/**
 * && -> false && true -> false "o valor mesmo"
 * || -> false && true -> vai retornar "o valor mesmo"
 * 
 * Valores que retornam FALSY
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */

console.log('Luiz Otávio' && 0 && 'Maria'); // => 0
console.log('Luiz' && '' && 'Maria'); // => Maria

//
function falaOi() {
  return 'oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

//
console.log(0 || false || null || 'Luiz Otávio' || true); // => 'Luiz Otávio': o primeiro valor verdadeiro encontrado

//
const corUsuario = 'Azul';
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao); // => Petro || corUsuario