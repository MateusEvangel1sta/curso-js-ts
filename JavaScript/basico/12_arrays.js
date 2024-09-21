const alunos = ['Luiz', 'Maria', 'João']; // Uma lista de coisas
console.log(alunos); // => ["Luiz", "Maria", "João"]

alunos.push('Eduardo'); // Adicionando um novo item
console.log(alunos); // => ["Luiz", "Maria", "João", "Eduardo"]

alunos.pop(); // Removendo o último item
console.log(alunos); // => ["Luiz", "Maria", "João"]

alunos.unshift('Antônio'); // Adicionando um novo item no início
console.log(alunos); // => ["Antônio", "Luiz", "Maria", "João"]

alunos.shift(); // Removendo o primeiro item
console.log(alunos); // => ["Luiz", "Maria", "João"]

// Buscando um item
console.log(alunos.indexOf('Maria')); // => 1: o índice do item na lista
console.log(alunos.indexOf('Ana')); // => -1: o item não existe na lista

// Alterando um item
alunos[1] = 'Mariana'; // Alterando o segundo item
console.log(alunos); // => ["Luiz", "Mariana", "João"]

// Deletando um item
delete alunos[1]
console.log(alunos); // => ["Luiz", "João"]

// Recorte
console.log(alunos.slice(0, -2)); // => ['Luiz']