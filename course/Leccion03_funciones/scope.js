// El scope es el alcance de las variables.
// El scope es el alcance de las funciones.
// El scope es el alcance de las variables globales.
// El scope es el alcance de las variables locales.
// El scope es el alcance de las variables de bloque.

// !Existen dos scopes: global y local.
// El scope global es el alcance de las variables globales.
// El scope local es el alcance de las variables locales.

var nombre = 'Joan';

console.log(nombre);

function decirHola(){
  nombre = 'Cody';
  console.log('Hola ' + nombre);
}

decirHola();

