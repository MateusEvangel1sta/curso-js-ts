// Reatribuindo um valor para a `exports`.
// Neste momento, ela deixa de ser um objeto e se torna uma função.
module.exports = function (x, y) {
  return x * y;
}

console.log(module.exports(2, 2));

// Agora se tornou um `number`
module.exports = 2;
console.log(typeof module.exports);