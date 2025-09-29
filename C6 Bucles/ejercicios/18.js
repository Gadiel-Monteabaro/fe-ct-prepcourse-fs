function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let inicio = Math.min(a, b);
  let fin = Math.max(a, b);
  let resultado = 1;

  if (inicio <= 0 && fin >= 0) {
    return 0;
  }

  for (let i = inicio; i <= fin; i++) {
    resultado *= i;
  }

  return resultado;
}

module.exports = productoEntreNúmeros;
