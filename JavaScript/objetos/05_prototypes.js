/**
 * JavaScript é baseado em protótupos para acessar propriedades e metódos de um objeto para outro.
 * 
 * Definição de protótipo
 * Protótipo é o termo usado apra se referir ao que foi criado pela primeira, vez, servindo de modelo ou molde para futuras produções.
 * 
 * Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessa um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (nulll) até encontrar (ou não) tal membro.
 */

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// Criando metódo dentro do prototype
Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.estouAqui = 'Hahahaha';

const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função contrutora

console.log(pessoa1);

console.log(pessoa1.estouAqui);
console.log(pessoa2.nomeCompleto());


// prototype
console.log(Pessoa.prototype === pessoa1.__proto__);