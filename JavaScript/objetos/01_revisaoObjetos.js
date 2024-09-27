// Objeto literal
const primeiraPessoa = {
  // chave/valor
  nome: 'Luiz',
  sobrenome: 'Miranda'
};

console.log(primeiraPessoa); // Acessando objeto.
console.log(primeiraPessoa.nome); // Acessando a chave.
console.log(primeiraPessoa['sobrenome']); // Outra forma de acessar uma chave.

// Usando o construtor do objeto
const segundaPessoa = new Object();
segundaPessoa.nome = 'Maria';
segundaPessoa.sobrenome = 'Oliveira';

// Apagando atributos
delete primeiraPessoa.nome;
console.log(primeiraPessoa);

// Funções dentro do objeto (metódos)
segundaPessoa.falarNome = function () {
  console.log(`${this.nome}`);
};

segundaPessoa.falarNome();   

segundaPessoa.idade = 64;
segundaPessoa.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}

console.log(segundaPessoa.getDataNascimento());

// for in
for (let chave in segundaPessoa) {
  // console.log(chave);
  console.log(segundaPessoa[chave]);
}

// Factory Function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${nome} ${sobrenome}`;
    },
    
    set nomeCompleto(novoNome) {
      novoNome = novoNome.split(' ');

      this.nome = novoNome.shift();
      this.sobrenome = novoNome.shift();
    },
  }
}

const nomePrimeiraPessoa = criaPessoa('Luiz', 'Otávio');
console.log(nomePrimeiraPessoa.nomeCompleto);

// Constructor Function
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // Travando qualquer objeto que se origine dessa função
  Object.freeze(this);
}

const primeiraPessoaConstructor = new Pessoa('Luiz', 'Miranda');
console.log(primeiraPessoaConstructor);

// Travando um OBJETO -> Não é possível alterar nada ou adicionar.
// Object.freeze(primeiraPessoaConstructor);