const btnLogin = document.querySelector("#btn-login");

btnLogin.onclick = function (event) {
  event.preventDefault;
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    //vamos a guardar el correo y el password en localstorage
    //setItem --> guardamos el valor en localstorage
    localStorage.setItem(input.name, input.value);
    input.value = "";
  });
  login();
};

//como capturo los datos del localstorage
//localstorage.getItem(key)
/*
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');

const lblEmail = document.querySelector("h1#email");
lblEmail.textContent = email;

const lblPassword = document.querySelector("h4#password");
lblPassword.textContent = password;
*/
function login() {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  form.style.display = "none";
  usuarioSection.style.display = "block";
  titleEmail.innerHTML = email;
  titlePassword.innerHTML = password;
}

const form = document.querySelector("#section-login");
const usuarioSection = document.querySelector("#usuario-logged");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("#cerrar-sesion");

if (email !== null && password !== null) {
    login();
}
else{
    usuarioSection.style.display = 'none';
}

function logout() {
  localStorage.clear();
  form.style.display = "block";
  usuarioSection.style.display = "none";
  titleEmail.innerHTML = "";
  titlePassword.innerHTML = "";
}

btnCerrarSesion.onclick = function (event) {
  logout();
};
