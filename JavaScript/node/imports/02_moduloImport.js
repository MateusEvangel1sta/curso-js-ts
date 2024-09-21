const multiplicacao = require('../02_modulo');

// Sobre caminhos
console.log(__filename);
console.log(__dirname);

// Sobre o path
const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arq', 'img'));