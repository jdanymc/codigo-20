/**
 * la clase Math sirve para manipular numeros y funciones matematicas
 */

//retorna la raiz cuadrada del parametro
console.log("raiz de 49 : ", Math.sqrt(49));

//retorna la potencia de un numero (base, potendia)
console.log("raiz de 2^3 : ", Math.pow(2, 3));
console.log("raiz de 27^1/3 : ", Math.pow(27, 1 / 3));

//redondea un numero
console.log("redondeo 9.86 : ", Math.round(9.83));

//redondea hacia abajo
console.log("redondeo hacia abajo 9.99 : ", Math.floor(9.99));

// retorna el techo de un numero
console.log("redondeo hacia arriba 11.0001 : ", Math.ceil(11.0001));

//retorna un numero random entre 0 y 1
console.log("random entre 0 y 1", Math.random() * 100);

//artificio para generar numero random
// Math.random() * (max-min) + min
console.log("random entre 50 y 850", Math.random() * (850 - 50) + 50);
