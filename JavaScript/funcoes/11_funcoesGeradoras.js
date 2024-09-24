// Para facilitar a identificação dessas funções, vamos utilizar o "*".
function* geradora1() {
  // Código qualquer...
  // Isso é quase como se fosse um `return`
  yield 'Valor 1';
  // Código qualquer...
  yield 'Valor 2';
  // Código qualquer...
  yield 'Valor 3';
}

let g1 = geradora1();
// console.log(g1); // Apenas desta forma, não conseguimos ver o valor.
console.log(g1.next()); // Para acessar o "retorno" dessa função, precisamos executar o metódo `.next`.

// Perceba que no objeto é retornado também a chave `done`. Esta tem como função informar se os valores retornas já acabaram. 

console.log(g1.next()); // Próximo valor. `done: false`: ainda faltam valores a serem retornados.

console.log(g1.next()); // Último valor impresso. `done: false`: ele ainda não identifou que os valores já terminaram.

console.log(g1.next()); // `done: true`: agora sim identificou que os valores terminaram.


// Iterando sobre eles.
g1 = geradora1();

// O next já está incluso, já está sendo chamado automaticamente.
for (let valor of g1) {
  console.log(valor);
}


// Gerador infinito
function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++
  }
}

let g2 = geradora2();
// isso é infinito.
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('Separador')

// Chamando uma função dentro da outra.
function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4= geradora4();
for (let valor of g4) {
  console.log(valor)
}


// Retornando funções
function* geradora5() {
  yield function() {
    console.log('Vim do y1');
  };

  // outros códigos

  yield function() {
    console.log('Vim do y2');
  }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();