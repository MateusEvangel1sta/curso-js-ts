// // New Object -> Object.prototype
// const objA = {
//   chaveA: "A"
//   // __proto__: Object.prototype
// };

// const objB = {
//   chaveB: "B"
//   // __proto__: objA
// };

// // Setando o prototype
// Object.setPrototypeOf(objB, objA);
// console.log(objB.chaveA);


// const objC = new Object();
// objC.chaveC = "C";

// // Object.setPrototypeOf(objC, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveA);
// console.log(objC.chaveB);



function Produto(titulo, preco) {
  this.titulo = titulo;
  this.preco = preco
}

Produto.prototype.desconto = function(desconto) {
  this.preco -= this.preco * (desconto / 100);
}

Produto.prototype.aumento = function(porcentagem) {
  this.preco += this.preco * (porcentagem / 100);
}

const produto1 = new Produto('Celular', 1000);

produto1.desconto(10);
produto1.aumento(10);
console.log(produto1.preco);


// Literal
// Setando o prototype do meu objeto para o prototype da função construtora
const produto2 = {
  titulo: 'Tablet',
  preco: 1200
};

Object.setPrototypeOf(produto2, Produto.prototype);
produto2.aumento(10);
console.log(produto2);

// Object.create -> Criamos o objeto e já setamos o seu prototype e podemos configurar as chaves.
const produto3 = Object.create(Produto.prototype, {
  tamanho: {
    writable: true,
    enumerable: true,
    value: '43',
    configurable: true
  }
});
produto3.preco = 113;
produto3.aumento(40);
console.log(produto3);