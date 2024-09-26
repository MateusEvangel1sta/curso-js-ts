// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os pares
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaDobroPares = numeros.filter(value => {
  return value % 2 == 0;
}).map(value => {
  return value * 2;
}).reduce((acc, value) => {
  return acc += value;
});

console.log(somaDobroPares);