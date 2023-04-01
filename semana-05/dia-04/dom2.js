//con clases

const inputName = document.querySelector(".input_name");
console.log(inputName);

//con id

const inputPassword = document.querySelector("#input_password");
console.log(inputPassword.value);

// con tagname
const form = document.querySelector("form");
console.log(form);

// querySelectorAll  devuelve Nodelist SOLO es compatible con foreach

const inputs = document.querySelectorAll("input");
console.log(inputs);

const arrayInputsText = [];

inputs.forEach((elemento) => {
  if (elemento.type === "text") {
    // console.log(elemento);
    arrayInputsText.push(elemento);
  }
});
console.log(arrayInputsText);
const arrayConvertido = Array.from(inputs);

const arrayFilter = arrayConvertido.filter(input => input.type==='text');

console.log(arrayFilter);


inputs.map((elemento) => {
    if (elemento.type === "text") {
       console.log(elemento);
      //arrayInputsText.push(elemento);
    }
  });
