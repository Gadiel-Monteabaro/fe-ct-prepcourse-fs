function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      newArr.push(array[i]);
    }
  }

  if (
    newArr.indexOf("Enero") === -1 ||
    newArr.indexOf("Marzo") === -1 ||
    newArr.indexOf("Noviembre") === -1
  ) {
    return "No se encontraron los meses pedidos";
  }

  return newArr;
}

module.exports = mesesDelAño;
