// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// Não utilize var, utilize const

const nome = 'João';
console.log(nome);

// nome = 'Maria'; // Não podemos modificar o valor de uma constante.
// console.log(nome); // Erro!

// Não podemos declarar uma constante sem atribuir valor.
// const sobrenome; // Erro!
const sobrenome = 'Silva'; // Correto!

// Exemplo de utilização de constantes
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);