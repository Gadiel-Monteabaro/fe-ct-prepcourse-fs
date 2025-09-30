function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let c = ""; // c = cadena invertida
  for (let i = texto.length - 1; i > -1; i--) {
    c += texto[i];
  }
  return c;
}

module.exports = invertirTexto;
