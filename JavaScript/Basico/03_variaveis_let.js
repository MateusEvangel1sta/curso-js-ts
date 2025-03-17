let nome = 'João';

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

let sobrenome; // Variável declarada, mas não inicializada
console.log(nome, sobrenome); // João Undefined

sobrenome = 'Oliveira'; // Inicializando a variável
console.log(nome, sobrenome); // João Oliveira

// let nome; // SyntaxError: Identifier 'nome' has already been declared



// Regras para criação de variáveis


// Não podemos criar variáveis com palavras reservadas
// let let; // SyntaxError: Unexpected token 'let'
// let if; // SyntaxError: Unexpected token 'if'

// Variáveis precisam ter nomes significativos
let n = 'João'; // Errado
let nomeCliente = 'João'; // Certo

// Não pode começar o nome de uma variável com número
// let 1nome; // SyntaxError: Unexpected token '1'

// Não podem conter espaços ou traços
// let nome-Cliente; // SyntaxError: Unexpected token '-'
// let nome cliente; // SyntaxError: Unexpected identifier
// Utilizamos camelCase
let nomeCompleto = 'Enzo Evangelista'

// Case-sensitive
let NomeCliente = 'João';
let nomecliente = 'Maria';

console.log(NomeCliente, nomecliente); // João Maria

// Não podemos redeclarar variáveis com let
// let nome = 'João'; // SyntaxError: Identifier 'nome' has already been declared

// NÃO UTILIZE VAR, UTILIZE LET!