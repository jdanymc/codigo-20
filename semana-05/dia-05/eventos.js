function imprimir() {
  console.log("hola desde JS");
}

function calculadoraHTML(operacion) {
  const n1 = document.getElementById("numero1").value;
  const n2 = document.getElementById("numero2").value;

  if (n1 === "" || n2 === "") {
    alert("Ingrese ambos elementos");
    return;
  }
  let resultado = undefined;

  switch (operacion) {
    case "+":
      resultado = sumar(n1, n2);
      break;
    case "-":
      resultado = restar(n1, n2);
      break;
    case "*":
      resultado = multiplicar(n1, n2);
      break;
    case "/":
      if (+n2 === 0) {
        resultado = "Division entre cero no permitida";
      } else {
        resultado = dividir(n1, n2);
      }
      break;
    default:
      resultado = "Operación no encontrada";
  }
  const total = document.querySelectorAll("p");
  const p = document.createElement("p");
  const value = document.createTextNode(
    `${total.length + 1}.- ${n1} ${operacion} ${n2} = ${resultado}`
  );
  p.appendChild(value);

  const contenedor = document.querySelector("#resultado");
  contenedor.appendChild(p);

  //  document.getElementById("resultado").innerHTML = resultado;
}
