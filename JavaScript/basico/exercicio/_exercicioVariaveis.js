let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);

varA = 'A';
varB = 'B';
varC = 'C';
// Forma mais avançada
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);