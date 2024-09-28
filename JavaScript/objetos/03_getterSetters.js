function Produto(titulo, preco, estoque) {
  this.titulo = titulo;
  this.preco = preco;

  // privado
  let estoquePrivado = estoque;  

  
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    // getter -> recuperar
    get: function () {
      return estoquePrivado;
    },

    // setter -> definir
    set: function (valor) {
      if (typeof valor !== 'number') {
        console.log('O valor passado não é permitido.');
        return
      };
      
      estoquePrivado = valor;
    }
  });
}

const produtoUm = new Produto('Camiseta', 20, 3);
console.log(produtoUm.estoque);

produtoUm.estoque = 500;
console.log(produtoUm.estoque);
