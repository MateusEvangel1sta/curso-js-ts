function saudacao(name) {
  // console.log(`Olá, ${name}!`);
  return `Bom dia, ${name}!`;
}

saudacao('Luiz');
saudacao('Enzo');

const saudacaoArmazenada = saudacao('Maria');
console.log(saudacaoArmazenada);

// Outro exemplo
function soma(x = 1, y = 1) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(5, 5));
console.log(soma(5));
console.log(soma());


// função anônima
const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// Arrow function com return implícito
const outraRaiz = (n) => n ** 0.5;
console.log(outraRaiz(81));
