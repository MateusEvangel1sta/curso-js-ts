// `console.dir` -> Efeito apenas no navegador. No node, é que nem o `.log`.
function retornaFuncao(nome) {
  // const nome = 'Luiz';

  return function () {
    // closure -> Habilidade da função de acessar o seu escopo léxico
    return nome;
  };
}

const funcao = retornaFuncao('Luiz');
console.log(funcao());

const segundaFuncao = retornaFuncao('João');
console.dir(segundaFuncao());