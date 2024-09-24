// IIFE -> Immediately Invoked Function Expression -> Funções Imediatas
// Ela se invoca na própria declaração. Nada que está dentro desta função toca o escopo global.
(function(idade, peso, altura) {  // É possivel passar parâmetros.
  const nome = 'Luiz';
  const sobrenome = 'Miranda';

  function criaNome(nome) {
    return `${nome} ${sobrenome}`;
  }

  function falaNome(nome) {
    return `Olá, ${criaNome(nome)}. Você tem ${idade} anos, pesa ${peso}kg e tem ${altura}m de altura.`;
  }

  console.log(falaNome(nome));
})(30, 80, 1.80); // Aqui são passados os argumentos

const nome = 'Otávio';
console.log(`Olá, ${nome}.`);