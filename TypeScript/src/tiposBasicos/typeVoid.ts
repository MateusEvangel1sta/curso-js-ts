// void -> sem retorno
function semRetorno(...args: Array<string>): void {
  console.log(args.join(' '));
}

semRetorno(
  'Vanessa',
  'Maikon',
  'Argileu',
  'João',
  'Naara',
  'Alana',
  'Laís',
  'Sofia',
);

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

pessoa.exibirNome();

export { pessoa };
