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

async function executa() {
  try {
    // Se tirarmos a `await`, o console retornará uma PROMISE pendente, pois, não estamos esperando ela ser concluída.
    const fase1 = esperaAi('Fase 1', rand());
    console.log(fase1);

    // pegando o valor da promise que está pendente
    setTimeout(function() {
      console.log(fase1);
    }, 5000);
  
    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);
    
    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);
    
    console.log('Terminamos na fase:', fase3);
  } catch(e) {
    // Desta forma, adicionamos um catch.
    console.log(e);
  }
}

executa();

/** *** Estados de uma PROMISE
 * Pendente (pending) - Foi executada e ainda não retornou o valor.
 * fullfilled -> Reperesentação de sucesso
 * rejected -> Rejeitada
 */