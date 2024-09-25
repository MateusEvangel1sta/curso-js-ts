//             -5       -4      -3         -2          -1
//              0        1       2          3           4
let nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const saveNomes = [...nomes];

// arg1 -> O índice que quero começar a mexer
// arg2 -> Quantos elementos quero remover
// arg3 -> Elementos para adicionar, todos separados por vírgulas

// nomes.splice(arg1, arg2, arg3)
// O metódo splice tb suporta números negativos

// simulando função pop().
removidos = nomes.splice(3, 2); // Do índice 3, eu quero remover 2 elementos. A função splice retorna um array dos elementos removidos.
console.log(nomes, removidos);

// removendo com índices negativos
removidos = nomes.splice(-2, 1); // Remove o elemento do índice -2
console.log(nomes, removidos);

// Antes vamos recuperar nossos valores.
nomes = [...saveNomes];

// Removendo de um lugar até o fim do Array
removidos = nomes.splice(-2, Number.MAX_VALUE); // Do índice -2 em diante, remova todos os índices.
console.log(`Este é o maior valor possível em JS: ${Number.MAX_VALUE}`);
console.log(nomes, removidos);

// Adicionando Elementos
nomes = [...saveNomes];
nomes.splice(3, 0, 'Luiz'); // Adição do valor "Luiz" no índice 3.
removidos = nomes.splice(3, 1, 'Pedro'); // Pule um índice a partir do 3, remove o valor atual e adicione o valor "Pedro".
console.log(nomes, removidos);

removidos = nomes.splice(3, 2, 'Ana', 'Lucas', 'Danilo'); // Pule dois índice a partir do índice dois, remova os dois pulados e no lugar deles adicione o valor "Ana", "Lucas" e 'Danilo.
console.log(nomes, removidos);