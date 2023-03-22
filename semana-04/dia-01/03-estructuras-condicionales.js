// estructuras condicionales
const edad = 17;

if (edad >= 18) {
  console.log("Ya es mayor de edad");
} else {
  console.log("Aún es menor de edad");
}

console.log("---------fin-ejercicio--------");
// hacer un algoritmo para aplicar un descuento
// del 15% de la compra total si y solo si
// el dia de la semana es martes
// en caso contrario, no aplicar ningun descuento

const dia = "martes";
const totalComprado = 500;
let totalPagar = totalComprado;

if (dia === "martes") {
    totalPagar = totalComprado - totalComprado * 0.15;
}

console.log("Total a pagar:", totalPagar);

console.log("---------fin-ejercicio--------");

const dia1 = "martes";
const totalComprado1 = 500;
let totalPagar1 = totalComprado1;

if (dia1 === "martes" && totalComprado1>=1000) {
    totalPagar1 = totalComprado1 - totalComprado1 * 0.15;
}

console.log("Total a pagar:", totalPagar1);