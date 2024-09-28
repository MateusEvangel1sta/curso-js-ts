// Produto -> aumento, desconto
// Camisa = cor , caneca = material
function Produto(titulo, preco) {
  this.titulo = titulo;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
}

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

// Setando o prototype da Camiseta para referênciar o Produto
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// Reescrevendo metódo
Camiseta.prototype.aumento = function (percentual) {
  this.preco += (this.preco * (percentual / 100));
}

function Caneca(titulo, preco, material, estoque) {
  Produto.call(this, titulo, preco);
  this.material = material;
  this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque
    },

    set: function(valor) {
      if (typeof valor !== 'number') return
      estoque = valor;
    }
  })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function(percentual) {
  this.preco -= (this.preco * (percentual / 100));
}

const camiseta = new Camiseta('Regata', 75, 'Preta');
camiseta.aumento(10);
console.log(camiseta)

const caneca = new Caneca('Caneca JS', 32, 'Porcelana', 500);
caneca.desconto(10);
console.log(caneca);
console.log(caneca.estoque);

caneca.estoque = '';
console.log(caneca.estoque);

caneca.estoque = 100;
console.log(caneca.estoque);
