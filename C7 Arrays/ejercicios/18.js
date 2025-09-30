function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let acum = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    acum += resultadosTest[i];
  }

  return acum / resultadosTest.length;
}

module.exports = promedioResultadosTest;
