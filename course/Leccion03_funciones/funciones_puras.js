// Funciones puras
// son funciones que no tienen efecto secundario
// no modifican el valor de las variables

// Los objetos mutables son: arrays, objetos, strings, etc.
// Los objetos inmutables son: Number, Boolean, null, undefined, etc.

// Son mas faciles de manipular que los objetos mutables.

let edades = [20];

function modificador(edades) {
  let copia = [...edades];
  copia[0] = 25; // Modifica es la copia
  return copia;
}

console.log(edades)
modificador(edades)
console.log(edades)

