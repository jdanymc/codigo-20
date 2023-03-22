/*const c1 = 10;
const c2 = 20;
const c3 = 30;
const c4 = 40;

const suma = c1 + c2 + c3 + c4;
const promedio = suma / 4;

console.log(promedio);
*/

// ejercicio 2.4
/*
const precioHora = 15;
const tiempoEstacionamiento = 2;

const costoTotal = precioHora * tiempoEstacionamiento;

console.log("Total a pagar:", costoTotal);
*/

// ejercicio
const interes = 0.15;
const tiempoAhorro = 48;
const sueldo = 1000;
const ahorroAnio = sueldo + sueldo * tiempoAhorro * interes;

console.log("Ahorro Anual:", ahorroAnio);


console.log("---------fin-ejercicio--------");
// 2.23 El hotel “Cama Arena” requiere determinar lo que le debe cobrar a
// un huésped por su estancia en una de sus habitaciones. Realice un
// diagrama de flujo y pseudocódigo que representen el algoritmo para
// determinar ese cobro.

const precioNoche = 120.0;
const nroNoches = 3;

const costoTotal = precioNoche * nroNoches;

console.log("Monto a cobrar a huesped:", costoTotal);

console.log("---------fin-ejercicio--------");

// 2.22 Se requiere un algoritmo para determinar el costo que tendrá
// realizar una llamada telefónica con base en el tiempo que dura la
// llamada y en el costo por minuto. Represente la solución mediante el
// diagrama de flujo y pseudocódigo.

const precioXMinuto = 0.5;
const cantidadMinutos = 12;

const costoLLamada = precioXMinuto * cantidadMinutos;

console.log("Monto a cobrar por llamada :", costoLLamada);

console.log("---------fin-ejercicio--------");

// 2.20 Realice el diagrama de flujo y pseudocódigo que representen
// el algoritmo para determinar el promedio que obtendrá un alumno
// considerando que realiza tres exámenes, de los cuales el primero y el
// segundo tienen una ponderación de 25%, mientras que el tercero de 50%.

const primeraNota = 10;
const segundaNota = 15;
const terceraNota = 20;

const promedio = primeraNota * 0.25 + segundaNota * 0.25 + terceraNota * 0.5;

console.log("Promedio de alumno :", promedio);

console.log("---------fin-ejercicio--------");

// 2.19 Realice el diagrama de flujo y pseudocódigo que representen el
// algoritmo para encontrar el área de un cuadrado.

const lado = 25;

const area = lado * lado;

console.log("El area del cuadrado de lado ", lado, " es :", area);

console.log("---------fin-ejercicio--------");
