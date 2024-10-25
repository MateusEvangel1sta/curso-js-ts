let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x !== 'number') return null;

  return Math.pow(x, 2);
}

const quadradoDeCinco = squareOf(5);
const quadradoError = squareOf('2');

if (quadradoDeCinco === null) {
  console.log('Conta inválida.');
} else {
  console.log(quadradoDeCinco);
}
