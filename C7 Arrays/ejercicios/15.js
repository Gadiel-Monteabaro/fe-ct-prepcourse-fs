function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length == 0) {
    return 0;
  }

  let mayor = Math.max(...array);
  return array.indexOf(mayor);
}

encontrarIndiceMayor([2, 1, 5, 4, 2, 8, 7, 9, 9]);
module.exports = encontrarIndiceMayor;
