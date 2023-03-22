// ejercicio
/*
 *
 */

// debugger;
const n1 = 10;
const n2 = 50;
const n3 = 30;

if (n1 > n2) {
  if (n1 > n3) {
    console.log("El mayor es ", n1);
  } else {
    console.log("El mayor es ", n3);
  }
} else if (n2 > n3) {
  console.log("El mayor es ", n2);
} else {
  console.log("El mayor es ", n3);
}

// ejercicio
/*
 * Dado un año, determinar si es bisiesto
* es bisiesto
 */

const anio = 2019;

if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
  console.log("El año ", anio, "es bisiesto");
} else {
  console.log("El año ", anio, "no es bisiesto");
}
