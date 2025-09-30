function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let newArr = array.map((e) => e * array.indexOf(e));
  return newArr;
}

module.exports = multiplicarElementosPorIndice;
