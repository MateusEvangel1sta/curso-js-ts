// Importação padrão
import { nome as nome2, seila, idade, soma, outroNome, Pessoa } from './modulo1.js';

// Importando TUDO
import * as MeuModulo from './modulo1.js';
console.log(MeuModulo);

const nome = 'João'; // Erro de colisão, caso as variáveis tenham o mesmo nome. 

console.log(nome, seila, idade, nome2, outroNome);
console.log(soma(5, 5));

const p1 = new Pessoa('Sérgio', 'Diágono');
console.log(p1.falarNome());

// Importando módulo padrão
import moduloPadrao from './modulo1.js';

moduloPadrao('bdtest', 'admin', 'admin')
  .then((res) => {
    console.log(res);
  }).catch((e) => {
    console.error(e);
  });