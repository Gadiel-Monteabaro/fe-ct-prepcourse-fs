function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let newArr = [];
  let tabla = 6;

  for (let i = 0; i <= 10; i++) {
    newArr.push(i * tabla);
  }

  return newArr;
}

module.exports = tablaDelSeis;
