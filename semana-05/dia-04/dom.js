// tag = etiqueta
// id =identificador
// class = clases

//selectores ----5 selectores

const inputs = document.getElementsByTagName("input");
//console.log("Estos son los inputs : ", inputs);

//Array.from --> convierte el collection en array

const newInputs = Array.from(inputs);
//console.log("Estos son los nuevos inputs : ", newInputs);

newInputs.map((newInput) => {
   // console.log('newInput',newInput)
});

console.log("-----------------");

const newForm = Array.from(document.getElementsByTagName("form"));
//console.log('formulario',newForm)

function btn_click() {
  const newInputs = Array.from(document.getElementsByTagName("input"));
  const divContent = document.getElementsByTagName("div");
  const newDivContent = Array.from(divContent);

  //limpiar divs
  newDivContent.forEach((element) => {
    element.innerHTML = "";
  });

  const divList = document.getElementById("container-list");

  let contenido = "";

  //acumulando salida de inputs
  newInputs.map((newInput) => {
    contenido += newInput.placeholder + " : " + newInput.value + "<br />";
  });
  divList.innerHTML = contenido;
}



// document.querySelector() --> la primera etiqueta que encuentre 
// document.querySelectorAll() --> todos los inputs
// traen un NodeList

// document.getElementById()  --> devuelve un elemento

// siempre traen array :
// document.getElementsByTagName()
// document.getElementsByClassName()
// traen un HTMLCollection

newInputs[0].style.backgroundColor = 'yellow';
newInputs[1].style.backgroundColor = 'green';
newInputs[2].style.backgroundColor = 'orange';
newInputs[3].style.backgroundColor = 'cyan';


const inputPassword = document.getElementById('input_password');
console.log(inputPassword);
inputPassword.style.backgroundColor='brown';

const inputLastname = document.getElementsByClassName('input_lastname');
inputLastname[0].style.color = 'red'

