function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg != 'string') reject(false);
    
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// Promise.all --> Passar uma array com promessas, irá me entregar uma promessa com um array dos os valores.
const promises = [
  'Primeiro valor',
  esperaAi('Promise 1', rand(1, 3)),
  esperaAi('Promise 2', rand(1, 3)),
  esperaAi('Promise 3', rand(1, 3)),
  'Outro valor'
];

Promise.all(promises)
  .then(function(valor) {
    console.log(valor);
  })
  .catch()

// Promise.race -->
// Promise.resolve -->
// Promise.reject -->