//  Nullish Coalescing
// Es cuando una variable puede ser null o undefined, y si es asi, se puede
// asignar un valor por defecto.

// Por ejemplo:

let nombre = "Joan";
let apellido = null;

console.log(nombre || "Anonimo"); // "Joan"
console.log(apellido || "Anonimo"); // "Anonimo"
