function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < array.length - 1; j++) {
  //     if (array[j] > array[j + 1]) {
  //       let v = array[j];
  //       array[j] = array[j + 1];
  //       array[j + 1] = v;
  //     }
  //   }
  // }
  array.sort();

  return array;
}
console.log(ordenarArray([1, 5, 4, 2, 8, 8, 7, 4, 4, 4]));
module.exports = ordenarArray;
