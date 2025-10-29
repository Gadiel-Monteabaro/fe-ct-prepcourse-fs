const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let count = 0;
  for (const key in objeto) {
    count += 1;
  }
  return count;
};

module.exports = contarPropiedades;
