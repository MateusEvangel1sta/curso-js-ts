function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg != 'string') reject(new Error('BAD VALUE'));
    
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
  }).then((resposta) => {
    console.log(resposta);
    return esperaAi(123, rand(1, 3));
  }).then((respota) => {
    // Aqui vai será impresso o retorno anterior.
    console.log(respota);
  }).then(() => {
    console.log('Exibe dados na tela');
  })
  // REJECT: Tratamento do erro.
  .catch((e) => {
    console.log('ERRO:', e);
  });

  console.log('Isso aqui será exibido antes de qualquer PROMISE');

