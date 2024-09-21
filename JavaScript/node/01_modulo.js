const nome = 'Luiz';
const sobrenome = 'Miranda';

const falarNome = () => `${nome} ${sobrenome}`;

// A exportação não precisa ter o mesmo nome do elemento a ser exportado.
// Formas de exportação
module.exports.nomeFictio = nome;
exports.sobrenomeFicticio = sobrenome;
// O this refere-se ao `module.exports`.
this.funcaoFalar = falarNome;

// console.log(this); // this === module.exports === exports

// Definindo no `exports`
module.exports.idade = 32;
// console.log(this.idade); // => 32
// Sobrepondo elemento
module.exports.idade = 25;
// console.log(this.idade); // => 25

// Exportando  classes
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;

// usando o for para deletar todos os atributos/metódos do `exports`
for (let i in module.exports) {
  delete module.exports[i];
}

// console.log(module.exports); // => {}: Objeto sem atributos/metódos
// Reescrevendo o `module.exports` (expotação em massa).
module.exports = {
  nome,
  sobrenomeFicticio: sobrenome,
  falarNome,
  Pessoa
};
