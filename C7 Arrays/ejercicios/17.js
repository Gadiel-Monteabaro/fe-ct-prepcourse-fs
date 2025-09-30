function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let acum = 0;

  for (let i = 0; i < arrayOfNums.length; i++) {
    acum += arrayOfNums[i];
  }

  return acum;
}

module.exports = agregarNumeros;
