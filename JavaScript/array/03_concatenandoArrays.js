const arrayUm = [1, 2, 3];
const arrayDois = [4, 5, 6];

// Usando o metódo `.concat`
const arrayTres = arrayUm.concat(arrayDois, [7, 8, 9], 'Luiz');
console.log(arrayTres);

// Usando o `spread operator` para espalhar os arrays dentro de outros.
const arrayQuatro = [...arrayUm, ...arrayDois];

console.log(arrayQuatro);