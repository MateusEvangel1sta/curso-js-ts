let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC); // B C A

let temp = varA;

varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC); // B C A