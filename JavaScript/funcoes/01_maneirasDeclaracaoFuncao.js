// Declaração de função (Function Hoisting) -> Nossa função será "jogada" para o topo do código.
falaOi(); // Por conta do Hoisting, eu consigo chamar a função antes da declaração.

function falaOi() {
  console.log('Oie');
}

// first-class objects (Objetos de primeira classe) -> Posso tratar as funções como dados.
// Function expression
const souUmDado = function () {
  console.log('Sou um dado.');
}

souUmDado();

// Recebendo uma função como parâmetro
function executaFuncao(funcao) {
  funcao();
}

executaFuncao(falaOi);

// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function.');
};

funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
}

obj.falar();