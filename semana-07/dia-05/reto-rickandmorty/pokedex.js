//atrapamos todos los elementos que utilizaremos

const cuerpo = document.querySelector(".row");

const obtenerListaRM = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();
  return data.results;
 };

const obtenerDatosRM = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
 // console.log(data.results[0]);
  return data;
};

obtenerListaRM().then((RM) => {
  //console.log(poke);
  RM.forEach((element) => {
    obtenerDatosRM(element.url).then((data) => {
      const card = document.createElement("div");
      card.classList.add("card","col-md-12","mt-3",'m-5','rounded-4', 'c-carta');
      card.style.width='15rem';
      card.innerHTML = 
      ` <img class="card-img-top rounded" width="100" heigth="100" src="${data.image}" alt="Card image cap">
            <div class="card-body text-center">
               <h5 class="card-title text-title">Nombre: ${data.name}</h5>
                <div class="card-body">
                  <h5 class="card-title">Origen: ${data.origin.name}</h5>
                </div>
            </div>
          </div>`;
      cuerpo.appendChild(card);
      //console.log(data.name);
      //console.log(data.sprites.other.dream_world.front_default);
    });
  });
});
