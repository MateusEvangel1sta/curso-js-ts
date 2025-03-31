const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);

console.log(alunos[0]);

alunos[2] = 'Eduado';
console.log(alunos);

alunos[3] = 'Luiza';
console.log(alunos);

console.log(alunos.length);

alunos.push('Fábio');
console.log(alunos);

alunos.unshift('Carolina');
console.log(alunos);

alunos.shift();
console.log(alunos);

alunos.pop();
console.log(alunos);

console.log(alunos.slice(0, 3));