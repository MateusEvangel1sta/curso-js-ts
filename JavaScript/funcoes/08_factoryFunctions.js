// Factory Function (Função de Fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
  // A função está retornando um objeto com os valores dos parâmetros.
  return {
    nome,
    sobrenome: sobrenome,
    // Uma função dentro de um objeto é chamada de metódo.
    falarAssunto(assunto) {
      return `${nome} está falando sobre ${assunto}.`;
    },
    
    // Getter -> Pega o retorno de um metódo.
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}.`;
    },

    // Setter -> Seta um valor
    set nomeCompleto(novoNome) {
      novoNome = novoNome.split(' '); // Pega a string, e a separa usando o caractere ' '. Adiciona todos os valores separados dentro de um array.

      this.nome = novoNome.shift(); // Atribiu à `nome`, o primeiro elemento do array.
      this.sobrenome = novoNome.shift();
    },

    altura,
    peso,

    get indiceMassaCorporal() {
      return (this.peso / (this.altura ** 2)).toFixed(2);
    }
  }
}

const primeiraPessoa = criaPessoa('Luiz', 'Otávio', 1.80, 80);
console.log(primeiraPessoa.falarAssunto('JS'));
console.log(primeiraPessoa.nomeCompleto); // Ao fazer isso, estamos recuperando o valor. Estamos usando o metódo `get`.

primeiraPessoa.nomeCompleto = 'Maria de Oliveira Souza'; // Ao fazer isso, estamos setando o valor. Estamos utilizando o método `set`.

console.log(primeiraPessoa.indiceMassaCorporal); // Utilizando método `get`, por isso não é necessário chamar a função. Dá a entender que ao utilizar o `get`, ele já executa a função e nos retorna o valor direto.