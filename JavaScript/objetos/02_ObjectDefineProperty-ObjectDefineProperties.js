// DegfineProperty - defineProperties
function Produto(titulo, preco, estoque) {
  this.titulo = titulo;
  this.preco = preco;

  // O estoque não poderá ser alterado e nem exibida ao cliente.
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Exibe a chave.
    value: estoque, // Valor da chave.
    // value: function () {
    //   return estoque;
    // },
    writable: false, // Posso alterar o valor?
    configurable: false // Posso reconfigurar a chave? False -> Não permite apagar ou alterar
    
  });

  // Definindo várias chaves
  Object.defineProperties(this, {
    descricao: {
      enumerable: true,
      value: 'Este produto possui tal e tal',
      writable: true,
      configurable: false
    },

    disponivel: {
      enumerable: true,
      value: true,
      writable: true,
      configurable: false
    }
  });
}

const produtoUm = new Produto('Camiseta', 20, 3);
produtoUm.estoque = 500;
console.log(produtoUm.estoque);
// console.log(produtoUm.titulo);

// Retornando chaves
console.log(Object.keys(produtoUm));

for (let chave in produtoUm) {
  console.log(chave);
}