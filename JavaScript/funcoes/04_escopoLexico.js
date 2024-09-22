const nome = 'Luiz';

function falaNome() {
  // const nome = 'Otávio'; // A função busca o valor dentro dela mesmo, caso não ache, ela vai para o escopo seguinte, até chegar ao ESCOPO GLOBAL. Caso não encontre no ESCOPO GLOBAL, dá erro.
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Otávio';
  falaNome();
}

usaFalaNome();