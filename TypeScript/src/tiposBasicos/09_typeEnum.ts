enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

// console.log(Cores);
// console.log(Cores.VERMELHO);
// console.log(Cores[0]);

export function escolhaUmaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaUmaCor(Cores.ROXO);
escolhaUmaCor(123456);
