// Produto -> aumento, desconto
// Camisa = cor , caneca = material
function Produto(titulo, preco) {
  this.titulo = titulo;
  this.preco = preco;
}

Produto.prototype.aumento = function (porcentagem) {
  this.preco += this.preco * (porcentagem / 100);
}

Produto.prototype.desconto = function (porcentagem) {
  this.preco -= this.preco * (porcentagem / 100);
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
}