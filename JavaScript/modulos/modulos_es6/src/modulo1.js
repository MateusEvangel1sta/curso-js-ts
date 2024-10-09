const nome = 'Luiz';
const sobrenome = 'Miranda';
const idade = 30;

function soma(x, y) {
  return x + y;
}

// Exportaçãoo direta!
export const outroNome = 'Paulo';

// Exportando classe
export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falarNome() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

// Exportação default
// export default function reqBD(bd, user, pass) {
//   return new Promise((res, rej) => {
//     const bdAdd = bd == 'bdtest' ? true : false;
//     const bdUser = user == 'admin' ? true : false;
//     const bdPass = pass == 'admin' ? true : false;

//     if (bdAdd && bdUser && bdPass) {
//       res('A conexão com o banco foi realizada.');
//     } else {
//       rej(new Error('A conexão não foi realizada.'));
//     }
//   });
// };

// Outra forma de exportação default
export default (x, y) => x * y;


// Exportação comum
export {
  nome,
  // alterando o nome.
  sobrenome as seila,
  idade,
  soma,
  // Outra forma de tornar um módulo padrão para exportação
  // reqBD as default
};