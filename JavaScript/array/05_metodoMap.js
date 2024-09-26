// Dobre os números
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Assim como o `Array.filter`, ele percorre cada valor e executa algo.
const numerosDobrados = numeros.map((numero, indice, array) => {
  // console.log(numero, indice, array);
  // retornando o índice e o número em dobro.
  return `${indice}: ${numero * 2}`;
});

console.log(numerosDobrados);

// Outros exercícios
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

// Retorne apenas uma string com o nome da pessoa.
const nomePessoa = pessoas.map((pessoa) => pessoa.nome);
console.log(nomePessoa);

// Retorne apenas a chave "idade".
const removeChaveNome = pessoas.map(pessoa => pessoa.idade);
console.log(removeChaveNome);

// Adiciona a chave id em cada objeto.
const idPessoas = pessoas.map((pessoa, indice) => pessoa.id = indice);
console.log(idPessoas);