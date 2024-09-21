// Esta função não recebe parâmteros e nem retorna algo.
function saudacaoMundo() {
  // A função apenas faz a impressão do `console`.
  console.log('Olá, mundo!');
}

saudacaoMundo();

// Função com parâmetros e retorno 
function saudacaoNome(nome) {
  return `Olá, ${nome}!`;
}

// Atribuindo o retorno na função a uma variável
const saucacaoNomeUsuario = saudacaoNome('Otávio');
console.log(saucacaoNomeUsuario); // => Olá Otávio!

// Outros exercícios
// Função recebe dois valores e retorna a soma deles.
function somaValores(x, y) {
  return x + y;
}

console.log(somaValores(2, 2)); // => 4
console.log(somaValores(3, 3)); // => 6


// Função com um valor padrão
// Caso não seja informado o valor do parâmetro, a função atribui um valor padrão
function multiplicacaoValores(x = 1, y = 1) {
  return x * y;
}

console.log(multiplicacaoValores()); // => 1
console.log(multiplicacaoValores(2)); // => 2
console.log(multiplicacaoValores(3, 2)); // => 6


// Função anônima
const divisaoValores = function(x = 10, y = 2) {
  return x / y;
}

console.log(divisaoValores()); // => 5
console.log(divisaoValores(2, 10)); // => 1


// arrow function (maneira moderna)
// return ímplicito
const raiz = x => Math.sqrt(x);
console.log(raiz(9));