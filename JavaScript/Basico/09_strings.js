// Strings are indexed
//               01234567
let umaString = 'Um texto';

// recovering the value of a specific index
console.log(umaString[1]); // m
console.log(umaString.charAt(3)); // t

// Concatenation
console.log(umaString.concat(' em um lindo dia.'));

// Searching for a specific string
console.log(umaString.indexOf('texto')); // 3
console.log(umaString.lastIndexOf('texto')); // 3

// Using regular expressions
console.log(umaString.match(/[a-z]/g)); // All lowercase letters
console.log(umaString.search(/x/)); // Locale of the letter x


umaString = 'O rato roeu a roupa do rei de roma.';


// Replacing a string
console.log(umaString.replace('rato', 'gato'));

// length of the string
console.log(umaString.length);

// Slicing a string
console.log(umaString.slice(2, 6)); // rato
console.log(umaString.slice(-5, -1)); // roma

// Splitting a string
console.log(umaString.split(' '));

// Uppercase and Lowercase
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());