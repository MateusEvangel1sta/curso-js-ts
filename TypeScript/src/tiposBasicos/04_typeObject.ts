const objetoA: {
  // Não posso mais alterar o valor dessa chave.
  readonly chaveConstante: string;

  chaveA: string;
  chaveB: string;
  chaveC?: string; // "?" -> Opcional. Chave Opcional

  // Liberando para a criação de novas chaves.
  [key: string]: unknown;
} = {
  chaveConstante: 'Chave Inalterada',
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
// objetoA.chaveB = 10; // Error
objetoA.chaveC = 'Nova Chave';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);
