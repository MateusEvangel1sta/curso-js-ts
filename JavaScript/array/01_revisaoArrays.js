//              0          1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
// Alterando o índice 2
nomes[2] = 'João';
console.log(nomes);

// Deletando sem afetar os índices
delete nomes[2];
console.log(nomes);

// A coisa nova funciona para String, Objetos, Funções, Números...
// Declarando array pelo construtor.
const frutas = new Array('Banana', 'Manga', 'Morango');
// const novo = frutas; // Atribuição por referência, não por valor. Se alterar algum dado em qualquer array, o outro também recebe alteração.

const novo = [...nomes]; // Dessa forma é possível copiar o valor, e não a referência. O operador `spread/rest` (nesta ocasião) é usado para espalhar um valor dentro do outro. Estamos jogando os valores do array `nomes` dentro do array `novo`.

// Tamanho do array
console.log(frutas.length);

// Removendo o último valor do array e adicionando-o dentro da variável
let removido = frutas.pop();
console.log(frutas);
console.log(removido);

// removendo o primeiro valor
removido = frutas.shift();
console.log(frutas);
console.log(removido);

// Adicionando ao último valor
frutas.push('Goiaba');
frutas.push('Graviola');
console.log(frutas);

// Adicionando ao primeiro valro
frutas.unshift('Acerola');
frutas.unshift('Umbu')
console.log(frutas);

// Fatiando array
const novoArrayFrutas = frutas.slice(0, 3); // Onde começa e onde termina. O índice final não é incluído.
const novoArrayFrutas2 = frutas.slice(1, -2); // removendo índices.

console.log(novoArrayFrutas);
console.log(novoArrayFrutas2);

// string para array -> O elemento de separação é o ' '
const nome = 'Luiz Otávio Mirando';
const arrayNome = nome.split(' ');

// array para string -> O elemento de junção é o ' '
const nomeArrayUnido = arrayNome.join(' ');
console.log(nomeArrayUnido);