const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  }
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  }
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

// const pessoaPrototype = {
//   ...falar,
//   ...comer,
//   ...beber,
// }

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome, enumerable: true },
    sobrenome: { value: sobrenome, enumerable: true }
  });
}

const p1 = criaPessoa('Luiz', 'Miranda');
const p2 = criaPessoa('Maria', 'Oliveira');

p2.falar();
p1.comer();