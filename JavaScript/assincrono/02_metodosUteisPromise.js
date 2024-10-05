function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (typeof msg != 'string') {
        reject('Caí no erro!');
        return
      }
      
      resolve(msg.toUpperCase() + ' - Passei na Promise');
      return
    }, tempo);
  });
}

// Promise.all --> Passar uma array com promessas, irá me entregar uma promessa com um array dos valores.
const promises = [
  // 'Primeiro valor',
  esperaAi('Promise 1', rand(1, 3)),
  esperaAi('Promise 2', rand(1, 3)),
  // 'Um outro valor aqui no meio',
  esperaAi('Promise 3', rand(1, 3)),
  // esperaAi(1000, rand(1, 3)), // Erro!
  // 'Outro valor'
];

Promise.all(promises)
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function(erro) {
    console.log(erro);
  });

// Promise.race --> Corrida. A primeira que resolver, me entregue o valor.
Promise.race(promises)
  .then((valor) => {
    console.log(valor);
  }).catch(e => {
    console.log(e);
  });

/////

function baixaPagina() {
  const emCache = true;

  if(emCache) {
    // Promise.reject --> Entrega uma Promisa jpa em rejeitada.
    // Promise.resolve --> Entrega uma Promise já resolvida.
    return Promise.resolve('Página em cache');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then(daodsPagina => {
    console.log(daodsPagina);
  }).catch(e => console.log(e));
