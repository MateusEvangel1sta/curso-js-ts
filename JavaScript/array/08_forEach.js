// forEach -> Forma de iterar sobre arrays.
const arrayUm = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elemento of arrayUm) {
  console.log(elemento);
}

arrayUm.forEach((valor, indice, array) => {
  console.log(valor);
  // console.log(array[indice]);
});