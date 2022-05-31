
function cuadrado(numero) {
  console.log(numero); // Si no se manda el numeros, el valor por defecto es undefined
  return numero * numero;
}

function cuadrado2(numero = 0) { 
  return numero * numero;
}

let resultado = cuadrado();
let resultado2 = cuadrado2();
console.log(resultado);
console.log(resultado2);

function saludar(nombre="", apellido) {
  console.log("Hola " + nombre + " " + apellido);
}


// Args
function sumaTodos() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

sumaTodos(1, 2, 3, 4, 5);