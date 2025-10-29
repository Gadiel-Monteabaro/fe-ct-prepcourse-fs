const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  // otra opcion
  // let newArr = [];
  // for (const key in objeto) {
  //   newArr.push(key);
  // }
  // return newArr;

  return Object.keys(objeto);
};

console.log(
  listarPropiedades({ nombre: "Gadiel", apellido: "Monteabaro", edad: 29 })
);

module.exports = listarPropiedades;
