//

document.write("hola de nuevo");

//|const divList = document.getElementById("container-list");
//divList.innerHTML = "<ul><li>hola 1</li><li>hola 2</li><li>hola 3</li></ul>";

const divList = document.querySelector("#container-list");

const ul = document.createElement("ul");
ul.className = "lista";

//divList.append(ul);

const inputs = Array.from(document.querySelectorAll("input"));
inputs.map((input) => {
  const li = document.createElement("li");
  const contenido = document.createTextNode(input.value);
  li.appendChild(contenido);
  ul.appendChild(li);
});
divList.appendChild(ul);
