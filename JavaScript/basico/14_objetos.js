const pessoaClientePrimaria = {
  nome: 'Maria',
  sobrenome: 'Oliveira',
  idade: 64,
  dizerOla() {
    // palavra `this` é usada (NESSE CONTEXTO) para referenciar o objeto
    return `Olá, meu nome é ${this.nome} ${this.sobrenome}!`;
  }
};

console.log(pessoaClientePrimaria);
console.log(pessoaClientePrimaria.nome);
console.log(pessoaClientePrimaria.dizerOla());

// Função construtora de objetos
function CriaPessoa(nome, sobrenome, idade) {
  return {
    nome, sobrenome, idade
  }
}

const outraPessoa = CriaPessoa('Luiz', 'Otávio', 25);
console.log(outraPessoa); // => 25