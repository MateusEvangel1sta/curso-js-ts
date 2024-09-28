// symmbol -> pode ser utilizado para criar uma chave privada
const _velocidade = Symbol('velocidade');

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(vel) {
    if (typeof vel !== 'number') return
    if (vel >= 100 || vel <= 0) return;
    
    this[_velocidade] = vel;
  }
  
  get velocidade() {
    return this[_velocidade]
  }

  acelerar() {
    if (this[_velocidade] >= 100) return
    this[_velocidade]++;
  }

  freia() {
    if (this[_velocidade] <= 0) return
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');
  
for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

c1.velocidade = 99;
console.log(c1.velocidade);