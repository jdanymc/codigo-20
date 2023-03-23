/**
 * tabla de multiplicar de un numero n
 * 1-12
 */

const n = 7;
for (let i = 0; i <= 12; i++) {
  console.log(n + " x " + i + " = " + n * i);
}

/**
 * Ejercicio
 * obtener la multiplicacion de 2 numeros a*b
 * - no usar el simbolo de multiplicacion
 * - usar solo sumas
 *  */

const numero1 = 9;
const numero2 = 9;
let producto = 0;
for (let i = 1; i <= numero2; i++) {
  producto += numero1;
}

console.log(
  "El producto de " + numero1 + " y " + numero2 + " es : " + producto
);

/**
 * Un usuario ingresará 5 números; todos
 * se desea saber
 * - cantidad de nros positivos
 * - cantidad de nros negativos
 * - cantidad de nros iguales a cero
 */

let pos = 0;
let neg = 0;
let cero = 0;
let numero = 0;
for (let i = 0; i < 5; i++) {
 // numero = +prompt("ingresa un numero:");
  if (numero === 0) {
    cero++;
  } else {
    if (numero > 0) {
      pos++;
    } else {
      neg++;
    }
  }
}

console.log("Negativos:" + neg + " Positivos: " + pos + " Ceros: " + cero);
