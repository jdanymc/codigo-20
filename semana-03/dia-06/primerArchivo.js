/*const numero1 = 10;
const numero2 = 20;

let resultado = 0;

resultado = numero1 - numero2;

console.log("el resultado de la resta es:  " + resultado);
*/

/*
let resultado = 0;
let operacion = "";

const numero1 = prompt("Ingrese el primer numero:");
const numero2 = prompt("Ingrese el segundo numero:");

operacion = prompt("Escriba la operación( + , - , * , / ):");

switch (operacion) {
  case "+":
    resultado = +numero1 + +numero2;
    break;
  case "-":
    resultado = +numero1 - +numero2;
    break;
  case "*":
    resultado = +numero1 * +numero2;
    break;
  case "/":
    if (numero2 == 0) {
      alert("No se puede ralizar la operación entre cero!!!");
    } else {
      resultado = +numero1 / +numero2;
    }
    break;
  default:
    alert("No se puede ralizar la operación!!!");
}
if (!(operacion == "/" && numero2 == 0)) {
  //console.log("el resultado de la resta es:  " + resultado);
  alert("el resultado de la resta es:  " + resultado)
  */

/*const valor1 = prompt("ingrese valor 1");
const valor2 = prompt("ingrese valor 2");

const operacion = prompt("ingrese la operacion puede ser +,-,*,/");
let resultadoCalculadora = 0;

if (operacion === "+") {
  resultadoCalculadora = +valor1 + +valor2;
  console.log("Resultado", resultadoCalculadora);
} else if (operacion === "-") {
  resultadoCalculadora = +valor1 - +valor2;
  console.log("Resultado", resultadoCalculadora);
} else if (operacion === "*") {
  resultadoCalculadora = +valor1 * +valor2;
  console.log("Resultado", resultadoCalculadora);
} else if (operacion === "/") {
  if (valor2 === 0) {
    console.log("No se puede dividir");
  } else {
    resultadoCalculadora = +valor1 / +valor2;
  }
  console.log("Resultado", resultadoCalculadora);
} else {
  console.log("Error en operación!!!");
}*/

const valor1 = prompt("ingrese un numero");
if (valor1 % 2 === 0) {
  alert("numero es par");
} else {
  alert("numero es impar");
}

const valor2 = prompt("ingrese valor 1");
const valor3 = prompt("ingrese valor 2");

let mayor = +valor2;

if (+valor3 > mayor) {
  mayor = +valor3;
}

alert("el mayor es " + mayor);
