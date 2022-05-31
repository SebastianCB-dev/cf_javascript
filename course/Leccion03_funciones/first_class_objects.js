//! First class citizens
//* Es cuando una función puede ser usada como un objeto.
//* Es decir, una función puede ser usada como una propiedad de un objeto.

// Debe ser posible retornarlo
// Debe ser posible pasarlo como parámetro
// Debe ser posible pasarlo como argumento 
// Debe ser posible asignarlo a una variable

function executor(func){
  func()
}

function decirHola() {
  console.log('Hola');
}

executor(decirHola);