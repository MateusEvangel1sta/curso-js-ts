/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(obj, 'prop')
 * ... (spread)
 * 
 * *** Já vimos
 * Object.keys (retorna chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

const produto = {
  titulo: "Caneca",
  preco: 1.80
};

// Copiando o valor, não a referência.
// Posso também criar outras chaves
const outraCoisa = {
  ...produto,
  outraChave: "Está é uma outra chave."
};

console.log(outraCoisa);

// Object.assign(des, obj, novasChaves) -> Copiando valores
const caneca = Object.assign({}, produto, { material: "Porcelana" });
console.log(caneca);

const outraCaneca = { titulo: produto.nome, preco: produto.preco };

// Object.values(obj) -> retornando apenas os valores
console.log(Object.values(produto));

// Object.entries(obj) -> Retornando chave/valor
console.log(Object.entries(produto));

// Object.keys(obj) -> Retornando chaves
console.log(Object.keys(produto));

// Object.freeze() -> Congelando objeto
Object.freeze(produto);
produto.titulo = 'Copo';
console.log(produto);

// Object.getOwnPropertyDescriptor -> Retornando propriedades dos atributos.
Object.defineProperty(outraCaneca, 'titulo', {
  writable: false,
  configurable: false,
  value: produto.titulo 
});

console.log(Object.getOwnPropertyDescriptor(outraCaneca, 'titulo'));
outraCaneca.titulo = 'Outra coisa';

console.log(outraCaneca);


// Percorrendo o objeto utilizando destructuring
for (let [chave, valor] of Object.entries(outraCaneca)) {
  console.log(chave, valor);
};
