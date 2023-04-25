// este componente sera nuestro container de apis
//una buena practica es crear un archivo service para poder hacer las peticiones a las apis

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

// vamos a construir una funcion generica el cual se encargue de hacer las peticiones desde este nuevo componente

export const getDataFromPokemon = async (url = BASE_URL) => {
  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
