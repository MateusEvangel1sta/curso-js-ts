const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

const escreve = require('./04_escevendoArquivos');
const ler = require('./04_lendoArquivos');

const pessoas = [
  { nome: 'João' },
  { nome: 'Maria' },
  { nome: 'Eduardo' },
  { nome: 'Luiza' }
];

const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, json);

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  return dados;
}

lerArquivo(caminhoArquivo)
  .then(dados => {
    return dados = JSON.parse(dados);
  }).then(dados => {
    dados.forEach(val => console.log(val.nome));
  });
