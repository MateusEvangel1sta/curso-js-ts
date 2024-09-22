// arguments -> Todos os parâmetros de uma função: só funciona com este tipo de declaração de função.
function funcao() {
  let total = 0;
  // console.log(arguments);
  for (argument of arguments) {
    total += argument;
  }

  console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);



function segundaFuncao(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

segundaFuncao(1, 2, 3, 4, 5, 6, 7); // Quando passamos parâmetros em excesso, o valor excedido fica "livre". O valor não é adicionado a uma variável.
segundaFuncao(1, 2, 3); // Quando não passamos a quantidade paramêtros necessários, temos UNDEFINED como valor dos paramêtros que restaram.



// Valores padrões -> Se um parâmetro não é informado, o valor padrão é acionado.
function terceiraFuncao(a, b = 2, c = 4) {
  console.log(a + b + c);
}

terceiraFuncao();
terceiraFuncao(2, 3);
terceiraFuncao(10, 43);
// pulando valor -> A maneira de pular um valor, é adicionano `undefined` ao parâmetro. Claro que podemos ter outra soluções também!
terceiraFuncao(2, undefined, 20);



// Desestruturação. Estou recebendo um objeto como parâmetro, e desse objeto, eu quero os determinados atributos. 
function quartaFuncao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

let possoUsarObjeto = {
  nome: 'Maria',
  sobrenome: 'Oliveira',
  idade: 64
};

quartaFuncao({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20 });
quartaFuncao(possoUsarObjeto);



// Desestruturação de array.
function quintaFuncao([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

quintaFuncao(['Luiz Otávio', 'Miranda', 30]);



// Desejo receber o operador e o acumulador. O resto dos valores passados, eu quero que sejam adicionados a variável numeros.
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '*') acumulador *= numero;
    if (operador === '/') acumulador /= numero;
   }
  
  console.log(acumulador)
}

conta('+', 1, 20, 30, 40, 50);