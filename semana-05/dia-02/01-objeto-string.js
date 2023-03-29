/**
 * propiedades de strings
 */

let frase = "Los programadores crean lo que las personas sueñan.";

console.log(frase);

//longitud de la cadena
console.log("length", frase.length);

console.log(frase[0]);

// convierte cadena en minuscula
console.log("toLowerCase : ", frase.toLowerCase());

//convierte cadena en mayuscula
console.log("toUpperCase : ", frase.toUpperCase());

//elimina espacios a los bordes
console.log("trim : ", "     Hola mundo     ".trim());

// devuelve substribg de cadena (inicio,fin)
console.log(frase.substring(9, 13)); //9 inicio + 4 caracteres => 13

//devuelve TRUE si la frase inicia con parametro
console.log(frase.startsWith("Los pr"));

//devuelve TRUE si la frase finaliza con parametro
console.log(frase.endsWith("sueñan."));

//devuelve TRUE si incluye el parametro de texto,desde el segundo parametro
console.log(frase.includes("las", 55));

// retorna la posició inicial de la frase en parametro
console.log(frase.indexOf("amad"));
