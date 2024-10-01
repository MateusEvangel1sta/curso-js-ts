class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Metódos de instâncias
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // Metódo estático
  static trocaPilha() {
    console.log('Ok, vou trocar');
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

const controle2 = new ControleRemoto('Samsung');
controle2.aumentarVolume();
controle2.aumentarVolume();
controle2.aumentarVolume();
controle2.aumentarVolume();
console.log(controle2);

ControleRemoto.trocaPilha();