const primeiroImportacao = require('../01_modulo'); // Importando o módulo por completo.
console.log(primeiroImportacao);

const segundaImportacao = require('../01_modulo').falarNome; // importando elemento específico do módulo.
console.log(segundaImportacao());

// Importação por Destructuring
const {
    nome: nomeDestructuring,
    sobrenomeFicticio: sobrenomeDestructuring,
    falarNome: falaNomeDestructuring
} = require('../01_modulo');

console.log(nomeDestructuring, sobrenomeDestructuring, falaNomeDestructuring);

// Importando classe
const { Pessoa } = require('../01_modulo');
const umaPessoa = new Pessoa('Luiz');

console.log(umaPessoa)

// Módulos do Node -> Não é necessário informar o caminho.
const path = require('path');
const axios = require('axios');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then(res => console.log(res))
  .catch(e => console.log(e));