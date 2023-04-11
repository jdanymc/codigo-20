console.log(1);
console.log(2);
function obtenerDatos(dni, callback) {
  setTimeout(() => {
    callback("Jhon Dany");
  }, 1000);
}

obtenerDatos("1010101", (nombre) => {
  console.log(nombre);
});
console.log(5);
console.log(6);

//la funcion obtener datos se ejecutará al final