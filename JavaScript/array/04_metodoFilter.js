// Metódos do Array -> Filter, Map, Reduce
// Retorne os números maiores que 10.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosMaioresQue10 = numeros.filter((numero, indice, arrayCompleto) => {
  console.log(`ìndice: ${indice}; Array: ${arrayCompleto}`);
  return numero > 10
});
console.log(`Estes são os números maiores do que 10: ${numerosMaioresQue10}`);


const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

// Retorne as pessoas que tem o nome com 5 letras ou mais.
const nomesComMaisDe5Letras = pessoas.filter((pessoa) => pessoa.nome.length >= 5); // array com os nomes

console.log(nomesComMaisDe5Letras);

// Retorne as pessoas com mais de 50 anos.
const maisDe50Anos = pessoas.filter(pessoa => pessoa.idade > 50);
console.log(maisDe50Anos);

// Retorne as pessoas cujo nome termina com "a".
const ultimoLetraA = pessoas.filter(pessoa => {
  return pessoa.nome[pessoa.nome.length - 1].toLocaleLowerCase() === 'a';
  // Alternativa do professor:
  // return pessoa.nome.toLowerCase().endsWith('a');
});

console.log(ultimoLetraA);