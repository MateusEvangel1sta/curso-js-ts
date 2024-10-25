// Quer dizer que nunca irá retornar algo.
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
