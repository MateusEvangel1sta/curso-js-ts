// Função Construtora -> Constrói Objetos
// Função Fábrica -> Fabrica Objetos

// Função Construtora -> Nome da função deve ser inicializada com letra maiúscula. Também é utilizado a palavra `new` na atribuição da função para uma variável.

function Pessoa(nome, sobrenome) {
  // Por ser uma função construtora, este é o corpo do nosso objeto.
  // Atributos/metódos privados
  const ID = 123456;
  const metodoInterno = () => {
    console.log('Este metódo não pode ser utilizado fora do objeto.');
  };
  
  // atributos/metódos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  // metódos
  this.metodo = () => {
    console.log(this.nome + ': sou um metódo.');
  };

  //
}

// A palavra `new` cria um objeto vazio. Ela faz o `this` apontar para o objeto utilizado. Ela retorna o objeto para a nossa variável.
const homem = new Pessoa('Luiz', 'Miranda');
const mulher = new Pessoa('Maria', 'Oliveira');

homem.metodo();
// mulher.metodoInterno(); // Is not a function