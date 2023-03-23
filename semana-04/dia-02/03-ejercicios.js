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
 * ejercicio 3.4
 */

const horas = 10;
let horaCosto = horas;
let costoTotalEstacionamiento = 0;

if (horaCosto > 10) {
  horaCosto = horaCosto - 10;
  costoTotalEstacionamiento = horaCosto * 2;
  horaCosto = 10;
}
if (horaCosto > 5) {
  horaCosto = horaCosto - 5;
  costoTotalEstacionamiento += horaCosto * 3;
  horaCosto = 5;
}
if (horaCosto > 3) {
  horaCosto = horaCosto - 2;
  costoTotalEstacionamiento += horaCosto * 4;
  horaCosto = 2;
}

costoTotalEstacionamiento += horaCosto * 5;

console.log(
  "El costo total por ",
  horas,
  " horas de estacionamiento es:",
  costoTotalEstacionamiento
);

/**
 * ejercicio 3.5
 */

const nombre1 = "Maria";
const edad1 = 35;

const nombre2 = "Jose";
const edad2 = 50;

const nombre3 = "Manuel";
const edad3 = 90;

let nombreMayor = nombre3;
let edadMayor = edad3;

if (edad1 > edad2) {
  if (edad1 > edad3) {
    nombreMayor = nombre1;
    edadMayor = edad1;
  }
} else {
  if (edad2 > edad3) {
    nombreMayor = nombre2;
    edadMayor = edad2;
  }
}

console.log("El de mayor edad es ", nombreMayor, " con ", edadMayor);

/**
 * ejercicio 3.8
 */
const antiguiedad = 10;
const sueldo = 3000;
let bono1 = 0;
let bono2 = 0;
let bonoMayor = 0;

if (antiguiedad > 5) {
  bono1 = sueldo * 0.3;
} else {
  if (antiguiedad > 2) {
    bono1 = sueldo * 0.2;
  }
}

if (sueldo > 3500) {
  bono2 = sueldo * 0.1;
} else {
  if (sueldo > 1000) {
    bono2 = sueldo * 0.15;
  } else {
    bono2 = sueldo * 0.25;
  }
}
bonoMayor = bono2;
if (bono1 > bono2) {
  bonoMayor = bono1;
}

console.log("El bono mayor a recibir es", bonoMayor);

/**
 * ejercicio 3.11
 */

const aniosAntiguedad = 4;
let bonoAntiguedad = 0;
if (aniosAntiguedad > 5) {
  bonoAntiguedad = 1000;
} else {
  bonoAntiguedad = aniosAntiguedad * 100;
}

console.log(
  "El bono a recibir por ",
  aniosAntiguedad,
  " años es: ",
  bonoAntiguedad
);

/**
 * ejercicio 3.12
 */
const horasTrabajadas = 45;
const pagoHoras = 100;
let sueldoTabajador = 0;
let restoHoras = horasTrabajadas;
if (horasTrabajadas > 50) {
  console.log("No se permite el trabajo");
} else {
  if (restoHoras > 45) {
    sueldoTabajador += (restoHoras - 45) * 3 * pagoHoras;
    restoHoras = 45;
  }
  if (restoHoras > 40) {
    sueldoTabajador += (restoHoras - 40) * 2 * pagoHoras;
    restoHoras = 40;
  }

  sueldoTabajador += restoHoras * pagoHoras;
  console.log(
    "El sueldo para un trabajador por ",
    horasTrabajadas,
    " horas es: ",
    sueldoTabajador
  );
}
