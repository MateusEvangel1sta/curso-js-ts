type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const listaFrutas = ['Banana', 'Manga', 'Maçã'];
const letrasMaiusculas = mapStrings(
  listaFrutas,

  (item) => {
    return item.toUpperCase();
  },
);

console.log(letrasMaiusculas);
