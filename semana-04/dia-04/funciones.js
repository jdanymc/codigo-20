//tipos de funciones

//declarativa

function suma1(a, b, c) {
  return a + b + c;
}

//anonima o expresiva

let suma2 = function (a, b, c) {
  return a + b + c;
};

//flecha

let suma3 = (a, b, c) => {
  return a + b + c;
};

// una funcion es un conjunto de soluciones para poder realizar tareas

function nombreDeLaFuncion() {
  console.log("mi primera funcion");
  alert("mi primera funcion");
}

const suma = (n1, n2) => {
  const suma = n1 + n2;
  console.log("resultado ", suma);
};

const saludar = (nombre, apellido) => {
  //return "Hola, mi nombre es " + nombre + " " + apellido + "!!";

  return `Hola mi nombre es ${nombre} ${apellido} !!`;
};

/**
 * --------------------------------
 */
const mostrarNombre = () => {
  //return "Hola, mi nombre es " + nombre + " " + apellido + "!!";
  const nombre = document.getElementById("nombreUsuario");
  let title = document.getElementById("reemplazo");
  let mensaje = `Tu te llamas ${nombre.value}`;
  title.textContent = mensaje;
};

/**
 * --------------------------------
 */
const mostrarTexto = () => {
  const texto = document.getElementById("inputTexto");
  let title = document.getElementById("titulo");
  title.textContent = texto.value;
};
/**
 * --------------------------------
 */

const mostrarTexto2 = () => {
  const texto = document.getElementById("inputTexto2");
  const title = document.getElementById("titulo2");
  title.textContent = `Mi artista favorito es ${texto.value}`;
};
/**
 * --------------------------------
 */
const comenzarAlarma = () => {
  setTimeout(tiempoCumplido, 5000);
};

const tiempoCumplido = () => {
  alert("Se acabo el tiempo");
};

/**
 * --------------------------------
*/
const tiempo = document.getElementById("tiempo");
const alarma = document.getElementById("textoAlarma");

const comenzarTiempo = () => {
  alarma.style.color = "blue";
  alarma.textContent = "ENCENDIDO";
  setTimeout(culminarTiempo, 1000 * tiempo.value);
};

const culminarTiempo = () => {
  alert("Se acabo el tiempo");
  alarma.style.color = "red";
  alarma.textContent = "APAGADO";
  document.getElementById("tiempo").value = "";
};
