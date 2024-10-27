const dadosClienteUm: [number, string] = [1, 'Luiz'];
console.log(dadosClienteUm);

// Posso alterar para qualquer coisa, conforme o tipo
dadosClienteUm[0] = 100;
console.log(dadosClienteUm);

const dadosClienteDois: [number, string, string] = [1, 'Luiz', 'Miranda'];
console.log(dadosClienteDois);

// Valor opcinal
const dadosClienteTres: [number, string, string?] = [1, 'Luiz'];
console.log(dadosClienteTres);

// Rest operator
const dadosClienteQuatro: [number, string, ...string] = [
  1,
  'Luiz',
  'Otávio',
  'Miranda',
];
console.log(dadosClienteQuatro);

// Tupla imutável (recomendado)
const dadosClienteCinco: readonly [number, string, string] = [
  1,
  'Luiz',
  'Miranda',
];
console.log(dadosClienteCinco);

// dadosClienteCinco[1] = 'Gustavo'; // Erro. Tupla é imutáveel
// console.log(dadosClienteCinco);
