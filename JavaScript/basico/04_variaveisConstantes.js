/******** Regras para a criação de uma variável
 * Não podemos criar variáveis com palavras reservadas
 * Variáveis precisam ter nomes significativos. Ex:
 *  * const n; // O que é n? "N" pode ser nome. Pode ser números...
 *  * const nomeCliente; // Um bom nome. O próprio nome se explica.
 * Não podemos começar o nome da variável com um número.
 * Não podem conter espaços ou traços. Para separar o nome de uma   * variável, utilize o camelCase ou snake_case.
 * Case-sensitive. Letras maiúsculas/minúsculas são distentas! Ex:
 *  * const nomeCliente = 'João';   // => 'João'
 *  * const nomecliente = 'Otávio"; // => 'Otávio'
 * Não podemos redaclarar variáveis com const.
 * NÃO UTILIZE VAR, UTILIZE const.
 */
const nome = 'João';
console.log(nome);

// nome = 'Otávio'; // => Erro: Não será possível alterar o valor!
// console.log(nome);

// const sobrenome; // => Erro: Não podemos inicializar uma const sem um valor!