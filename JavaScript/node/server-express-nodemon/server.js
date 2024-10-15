const express = require('express');
const app = express();

//          CRIAR   LER   ATUALIZAR   DELETAR
// CRUD ->  CREATE  READ  UPDATE      DELETE
//          POST    GET   PUT         DELETE

// http://meusite.com/   <- GET -> Entregue a página  /
// http://meusite.com/sobre   <- GET -> Entregue a página  /sobre
// http://meusite.com/contato   <- GET -> Entregue a página  /contato

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente!');
});

const porta = 3000;

app.listen(porta, () => {
  console.log(`http://localhost:${porta}`);
});