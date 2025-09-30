function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let c = ""; // c = cadena invertida
  for (let i = string.length - 1; i > -1; i--) {
    c += string[i];
  }

  if (c === string) {
    return true;
  }

  return false;
}

module.exports = esPalindromo;
