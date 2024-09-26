// Some todos os números (reduce)
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaDosNumeros = numeros.reduce((acumulador, valorAtual) => {
  return acumulador += valorAtual;
}, 0); // 0 -> Indica o valor inicial do índice acumulador. Se essa valor não for passado, por padrão, o primeiro valor se torna o primeiro valor do array.

// console.log(somaDosNumeros);


// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 67 },
  { nome: 'Wallace', idade: 47 }
]

const maisVelha = pessoas.reduce((acc, valor) => {
  if (acc.idade > valor.idade) return acc;
  return valor;
});

console.log(maisVelha);