function rand(min = 0, max = 3) {
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
      
      resolve(msg.toUpperCase());
      return
    }, tempo);
  });
}



/* esperaAi('Fase 1', rand())
  .then(valor => {
    console.log(valor);
    return esperaAi('Fase 2', rand());
  }).then(valor => {
    console.log(valor);
    return esperaAi('Fase 3', rand());
  }).then(valor => {
    console.log(valor);
  }).catch(e => console.log(e));
*/