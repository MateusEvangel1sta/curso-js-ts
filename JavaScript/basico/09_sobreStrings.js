let umaString = 'Um \'texto\''; // Escapando caractere.
console.log(umaString);

// STRINGS são indexadas -> É possível iterar sobre STRINGS
//           01234567
umaString = 'Um texto';
// Recuperando caractere através do índice.
console.log(umaString[4]); // => e: valor do índice.
console.log(umaString[-1]); // => undefined: índice inexistente.

// Outra forma de pegar o valor por índice.
console.log(umaString.charAt(4)); // => 4: valor do índice.
console.log(umaString.charAt(-1)); // => undefined: índice inexistente.
console.log(umaString.charAt(8)); // => : valor vazio (índice inexistente também)

// concatenção
console.log(umaString.concat(' em um lindo dia!'));
console.log(umaString + ' em um lindo dia!');
// Template String
console.log(`${umaString} em um lindo dia!`); // Essa forma é mais recomendada

// Pesquisando por caratere(s)
console.log(umaString.indexOf('texto')); // => 3: A palavra texto começa do índice 3.
console.log(umaString.indexOf('o')); // => 7: A letra é encontrada no índice 7.
console.log(umaString.indexOf('Um', 3)); // => -1: Partindo o índice 3, não foi possível encontrar os caracteres "Um".

// Pesquisando a partir do final
console.log(umaString.lastIndexOf('o')); // => 7: Este metódo começa de trás para frente.
// Vendo a diferença
console.log(umaString.indexOf('o', 3)); // => 7: Partindo do 3º índice, encontra o caractere "o".
console.log(umaString.lastIndexOf('o', 3)); // => -1: Partindo do 3º índice, não encontra o caractere "o".] 

// Expressões regulares
console.log(umaString.match(/[a-z]/g)); // => Retornará todas as letras minúsculas.
console.log(umaString.search(/x/)); // => => 5: índice onde foi encontrada a letra "x".
// Substituindo caracteres
console.log(umaString.replace('Um', 'Outra')); // => Outra texto: Substitui a palavra "Um" por "Outra",

// Utilizando método `replace` com expressões regulares.
umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.replace(/r/g, '#')); // Substitui todas as letras "r" por #.

// Retornando o tamanho da STRING
console.log(umaString.length); // => 35: tamanho da string

// Fatiando String
console.log(umaString.slice(2, 6)); // => rato
console.log(umaString.slice(-3)); // => ma.
console.log(umaString.slice(32)); // => ma.
console.log(umaString.slice(-5, umaString.length - 1)); // => roma

console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // => roma

// Dividindo STRING
console.log(umaString.split(' ')); // => Cada palavra em um índice dentro de um array.
console.log(umaString.split('r'));


// Tudo maiúsculo
console.log(umaString.toUpperCase());

// Tudo minúsculo
console.log(umaString.toLocaleLowerCase());