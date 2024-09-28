class DispotivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já está ligado.');
      return
    }

    this.ligado = true;
  }
  
  desligar() {
    if (this.ligado)
      this.ligado = false;
    
    console.log(this.nome + ' ja está desligado.');
    return
  }
}

class Smartphone extends DispotivoEletronico {
  constructor(nome, cor, modelo) {
    // chamando o construtor da classe pai (DispositivoEletronico)
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

class Tablet extends DispotivoEletronico {
  constructor(nome, conexaoComInternet) {
    super(nome);
    this.conexaoComInternet = conexaoComInternet;
  }

  ligar() {
    console.log('Olha, você alterou o método ligar.');
  }
}

const t1 = new Tablet('iPad', true);
console.log(t1.ligado);