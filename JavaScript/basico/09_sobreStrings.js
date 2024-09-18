//               01234567
let umaString = 'Um texto'; 

console.log(umaString[1]); // Busca o valor do índice
console.log(umaString[umaString.length - 1]); // Último caractere
console.log(umaString[-1]); // => undefined: elemento n existe.

console.log(umaString.charAt(8)); // Outra forma

// concatenando.
console.log(umaString.concat(' bonito,'));
console.log(`${umaString} bonito!`); // Forma recomendada (template string)

// Localizando caractere(s)
console.log(umaString.indexOf('texto')); // Retorne onde começa o parâmetro informado.
console.log(umaString.indexOf('Olá')); // => -1: Não encontrado