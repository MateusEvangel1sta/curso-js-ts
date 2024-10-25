// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => {
    return ac * valor;
  }, 1);
}

const result = multiplicaArgs(1, 2, 3);
console.log(result);

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => {
    return ac + valor;
  });
}

const texto = concatenaString('Oi', 'Tim', 'Vivo');
console.log(texto);

export function toMaiusculo(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const tudoMaiusculo = toMaiusculo('O planeta', 'Computador', 'Cadeira');
console.log(tudoMaiusculo);
