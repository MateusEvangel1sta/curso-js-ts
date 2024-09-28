// Superclass
function Conta(ag, conta, saldo) {
  this.ag = ag;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficente: R$ ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.ag}/${this.conta}\nSaldo: R$ ${this.saldo.toFixed(2)}`
  );
  
  return
};

const conta1 = new Conta(11, 22, 10);
console.log(conta1);
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(30);
conta1.sacar(2);

function ContaCorrente(ag, conta, saldo, limite) {
  Conta.call(this, ag, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite < valor) {
    console.log(
      `Saldo insuficiente: R$ ${this.saldo}`
    );

    return
  }

  this.saldo -= valor;
  this.verSaldo();
};

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);
