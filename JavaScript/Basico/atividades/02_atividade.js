const nome = 'Anastácia';
const sobrenome = 'Evangelista';
const idade = 18;
const peso = 84;
const alturaEmM = 1.80;
const anoNascimenento = (2025 - 1) - idade;

const imc = peso / (alturaEmM * alturaEmM);


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg. Tem ${alturaEmM} de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anoNascimenento}.`);