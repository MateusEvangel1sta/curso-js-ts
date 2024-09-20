const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

// => /: Divisão
// => *: Multiplicação
let indiceMassaCorporal= peso / (alturaEmM * alturaEmM);
let anoNascimento = 2024 - idade;

// Template String para a concatenação
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);