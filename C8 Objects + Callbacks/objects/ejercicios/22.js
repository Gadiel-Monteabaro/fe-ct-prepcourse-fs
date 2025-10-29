function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  let str1Format = str1
    .toLowerCase()
    .replace(/\s+/g, "")
    .split("")
    .sort()
    .join("");
  let str2Format = str2
    .toLowerCase()
    .replace(/\s+/g, "")
    .split("")
    .sort()
    .join("");

  if (str1Format === str2Format) {
    return true;
  }

  let r = "";
  for (let i = str2Format.length - 1; i >= 0; i--) {
    let letter = str2Format[i];
    r += letter;
  }

  return r === str1Format;
}

module.exports = esAnagrama;
