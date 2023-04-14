// que es una API? --(Aplication Programming Interface)
// data --> json
// api no devueve información

/**
 * en js existe una funcion la cual se encarga de poder hacer la petiicon a una url
 * FETCH()
 * es una funcion nativa
 * existen varios tipos de peticiones
 * GET --> sirve para obtener info
 * POST --> sirve para crear datos
 * PUT --> sirve para actualizar datos
 * DELETE --> sirve para eliminar datos
 *
 * */

/**
 * funcion async
 * las funciones async fueron creadas para poder ejecutar algo
 *
 */

/**
 * https://api.github.com/users/jdanymc
 *
 * hay un tiempo de espera, no sabemos cuanto demorara entonces usamos el async await
 *
 */

//atrapamos todos los elementos que utilizaremos
const imageProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUsername = document.querySelector("#github-username");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");

//acciones

const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search");

githubActionSearch.onclick = (e) => {
  const usuario = githubInputSearch.value;
  if (usuario === "") {
    Swal.fire({
      title: "Error",
      text: "Debes de llenar el usuario!!!",
      icon: "error",
    });
    return;
  }
  obtenerDatosGithub(usuario)
    .then((data) => {
      setDataUser(data);
    })
    .catch((error) => {
      Swal.fire({
        title: "Error",
        text: "No existe Usuario!!!",
        icon: "error",
      });
    });
};
// evento al presionar enter
githubInputSearch.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const usuario = e.target.value;
    if (usuario === "") {
      Swal.fire({
        title: "Error",
        text: "Debes de llenar el usuario!!!",
        icon: "error",
      });
      return;
    }

    obtenerDatosGithub(usuario).then((data) => {
      setDataUser(data);
    });
  }
});

const obtenerDatosGithub = async (username = "jdanymc") => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  if (!response.ok) { // podria ser (data.message=="Not Found")
    Swal.fire({
      title: "Error",
      text: "No existe Usuario!!!",
      icon: "error",
    });
    return;
  }

  return data;
};

//funcion que asigna los datos
const setDataUser = (data) => {
  imageProfile.src = data.avatar_url;
  githubName.textContent = data.name;
  githubUsername.textContent = `@${data.login}`;
  githubJoined.textContent = `Joined on ${data.created_at}`;
  githubRepos.textContent = data.public_repos;
  githubFollowers.textContent = data.followers;
  githubFollowing.textContent = data.following;
};
