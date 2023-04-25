import { getDataFromPokemon } from "../../service";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Container, Grid } from "@mui/material";
import "../../App.css";
import PokemonDetail from "../../components/PokemonDetail";

const Pokemon = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
  const [pokemons, setPokemon] = useState([]);

  const fetchPokemonList = async () => {
    const listPokemones = await getDataFromPokemon();
    //console.log("lista poke", listPokemones.results);
    setPokemon(listPokemones.results);
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
    <Container>
    <h1>POKEDEX CON REACT</h1>
    <Grid container spacing={3}>
    {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            //aca el codigo visual
            <Grid item md={4} lg={4} sm={12} xs={12} key={index}>
              <Card className="card-pokemon">
                <CardMedia
                  component="img"
                  className="img-pokemon"
                  image={`${imgUrl}${index + 1}.svg`}
                />
                <CardContent className="center">
                  <h3 className="name-pokemon">{pokemon.name}</h3>
                  <PokemonDetail name={pokemon.name} />
                </CardContent>               
              </Card>              
            </Grid>
          ))}

    </Grid>
  </Container>
  );
};

export default Pokemon;
