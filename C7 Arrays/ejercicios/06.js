function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let newArr = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}
module.exports = invertirArray;
