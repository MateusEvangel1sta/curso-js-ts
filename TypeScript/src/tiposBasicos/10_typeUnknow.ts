// Funciona como uma "any", mas seguro.
let x: unknown;
x = 100;
x = 'Luiz';
x = 900;
x = 10;

const y = 800;

if (typeof x === 'number') console.log(x + y);
