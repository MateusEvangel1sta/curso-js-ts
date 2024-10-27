type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// Neste caso, pode ser lido como AND
type Pessoa = TemNome & TemSobrenome & TemIdade;

// Pegando a interseção
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 34,
};

console.log(pessoa);

export { pessoa };
