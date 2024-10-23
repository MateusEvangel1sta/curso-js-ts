// Desativando o eslint
/* eslint-disable */

// Type Annotations
let nome: string = 'Luiz'; // Qualquer tipo de string: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d. 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<Number> = [10, 20, 30, 40, 50];
let arrayDeStrings: Array<String> = ['a', 'b', 'c'];

// Outra forma de decalaração
let outroArrayDeNumeros: number[] = [60, 70, 80, 90, 100];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Luiz',
  idade: 33,
  // Ao passar `?` no atributo `adulto`, tornamos essa chave opcional.
  // adulto: true
}

// Funções
function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
