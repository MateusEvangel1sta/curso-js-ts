// return
// Retorna um valor
// Termina a função
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 5));


// Função sem retorno
function soma2(a, b) {
  console.log(a + b);
}

soma2(5, 5);


// 
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome
  }
}

const p1 = criaPessoa('Luiz', 'Miranda');
console.log(p1);


//
function falaFrase(comeco) {
  function falaResto(resto) {
    return `${comeco} ${resto}`;
  }

  return falaResto;
}

console.log(falaFrase('Olá,')('Enzo'));


//
function criaMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(2));
