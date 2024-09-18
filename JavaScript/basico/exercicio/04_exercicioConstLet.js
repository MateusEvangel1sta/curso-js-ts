const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 180 / 100; // Dividimos por 100 para ter o valor em metros. => 1.8

// => /: Divisão
// => *: Multiplicação
const imc = peso / (altura * altura);

// Template String para a concatenação
console.log(`${nome} ${sobrenome} tem ${idade}, pesa ${peso}, tem ${altura} cm de altura e seu IMC é ${imc}`)