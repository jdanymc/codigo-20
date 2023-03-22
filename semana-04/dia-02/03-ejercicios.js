/**
 * Ejercicio 3.6
 */

const cantidadPersonas = 301;
let precioPersona = 95;
let precioTotal = 0;

if (cantidadPersonas > 200 && cantidadPersonas <= 300) {
  precioPersona = 85;
} else {
  if (cantidadPersonas > 300) {
    precioPersona = 75;
  }
}
precioTotal = precioPersona * cantidadPersonas;
console.log(
  "El costo unitario para ",
  cantidadPersonas,
  " personas es ",
  precioPersona,
  " entonces el presupuesto total es:",
  precioTotal
);

/**
 * Ejercicio 3.8
 */

const cantidadAlumnos = 12;
let precioAlumno = 95;
let costoTotal = 4000;

if (cantidadAlumnos >= 100) {
  precioAlumno = 65;
} else {
  if (cantidadAlumnos >= 50) {
    precioAlumno = 70;
  }
}

if (cantidadAlumnos > 30) {
  costoTotal = cantidadAlumnos * precioAlumno;
}

console.log("El presupuesto total es:", costoTotal);

/**
 * 3.4 + 4 ejercicios pag 89
 */