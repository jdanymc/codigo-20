const usersList = document.querySelector("#users_list");
const loader = document.querySelector(".loader");
const registrarBtn = document.querySelector("#registrar-btn");

const getUsers = async () => {
  //metodo 1
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET", //*GET, POST, PUT, DELETE, OPTIONS
    headers: {
      Authorization:
        "Bearer hghjjhkjhjkhkhkjhkjhkjhkgbnmbjhlhjkhkjhhkjhkjh.oiuiuoiojjljlk",
      "Content-Type": "application/json",
    },
    /* 
      //solo para POST,PUT
      body: JSON.stringify({
      username: "admin",
      password: "osito123",
    }),*/
  });
  const data = await response.json();
  //console.log("Método await", data);
  setUsersInView(data);

  //metodo 2
  /*
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log('Método then',data));
    */
};
const setUsersInView = (users) => {
  //console.log(results);
  users.forEach((user, i) => {
    // Por cada iteracion crea la variable html con el contendi de div que ocupa el
    // 25% porque usa col-md-3
    // dentro creo otro con la clase card y dentro del creo al card-body

    // cuando index = 0 + 1
    // index = 1 + 1
    // !aca usamos await porque getColorPokemon es una funcion async por
    // !por ende no se cuanto demore en reponder

    const userHtml =`
                    <div class="card">
                        <p>${user.name}</p>
                        <p>@${user.username}</p>
                        <p>${user.email}</p>
                        <p>${user.phone}</p>
                        <button type="button" class="btn_profile">Show profile</button>
                    </div>
                        `;
    // despues de crear el html basico concatenamos el html el container
    usersList.innerHTML += userHtml;
  });
loader.style.display = 'none';
};

getUsers();
