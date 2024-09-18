/******** Regras para a criação de uma variável
 * Não podemos criar variáveis com palavras reservadas
 * Variáveis precisam ter nomes significativos. Ex:
 *  * let n; // O que é n? "N" pode ser nome. Pode ser números...
 *  * let nomeCliente; // Um bom nome. O próprio nome se explica.
 * Não podemos começar o nome da variável com um número.
 * Não podem conter espaços ou traços. Para separar o nome de uma   * variável, utilize o camelCase ou snake_case.
 * Case-sensitive. Letras maiúsculas/minúsculas são distentas! Ex:
 *  * let nomeCliente = 'João';   // => 'João'
 *  * let nomecliente = 'Otávio"; // => 'Otávio'
 * Não podemos redaclarar variáveis com let.
 * NÃO UTILIZE VAR, UTILIZE LET.
 */

let nome = 'João'; // Declarando e inicializando variável.

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');


// Outros Exercícios da aula
let sobrenome; // Variável declarada, não inicializada.
console.log(sobrenome); // Undefined -> Valor indefinido.

sobrenome = 'Silva'; // Variável inicializada.
console.log(sobrenome)

sobrenome = 'Miranda'; // Alterando o valor da variável
console.log(sobrenome);

// let nome; // Redeclaração -> Isso irá dar erro! Você está declarando novamente uma variável já existente.
