import { getDataFromPokemon } from "../../service";
import React, { useState, useEffect } from "react";

const Pokemon = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";
  const [pokemons, setPokemon] = useState([]);

  const fetchPokemonList = async () => {
    const listPokemones = await getDataFromPokemon();
    //console.log("lista poke", listPokemones.results);
    setPokemon(listPokemones.results);
  };

  const fetchPokemonDetail = async (p) => {

    const result = await getDataFromPokemon(p.url);
    //console.log("lista poke", result);
    return result;
  };

  // en react existe una funcion llamada useEffect la cual se ejecuta cuando la pagina
  //esta iniciando vamos a usar useEffect si queremos ejecutar algo al inicio de la aplicacion

  useEffect(() => {
    //aca llamamos a la funcion
    fetchPokemonList();
    // IMPORTANTE por ahora en los useEffect debemos colocar un array vacio []
    //esto se hace para evitar un bucle infinito de peticiones
  }, []);

  return (
    <>
      <h1>Pokemons</h1>
      <hr />
      <div className="d-flex">
        <div className="row">
          {pokemons.map((poke, i) => {

           //fetchPokemonDetail(poke);
            return (
                <div className="col-sm-4 col-md-2" key={i}>
                  <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                    <img
                      src={/*pokemon.sprites.other.dream_world.front_default*/imgUrl + "/" + (i + 1) + ".svg"}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                    <h5 className="card-title">#{(i+1)}</h5>
                      <h4 className="card-title">{poke.name}</h4>
                    </div>
                  </div>
                </div>
              );
           
          

           
          })}
        </div>
      </div>
    </>
  );
};

export default Pokemon;
