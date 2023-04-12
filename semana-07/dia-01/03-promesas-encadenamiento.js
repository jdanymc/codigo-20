/**
 * Debemos encadenar promsas SI y SOLO SI  una dependen de la otra
 */

const categorias = [
  { id: 1, name: "terror" },
  { id: 2, name: "comedia" },
  { id: 3, name: "accion" },
];

const peliculas = [
  {
    categoria: "comedia",
    titulo: "El tonto y el más tonto",
  },
  {
    categoria: "comedia",
    titulo: "La máscara",
  },
  {
    categoria: "terror",
    titulo: "La monja",
  },
  {
    categoria: "terror",
    titulo: "Actividad Paranormal",
  },
  {
    categoria: "accion",
    titulo: "Terminator I",
  },
  {
    categoria: "accion",
    titulo: "Rápidos y Curiosos",
  },
];

const getCategoriaById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const categoriaEncontrada = categorias.find((c) => c.id === id);
      if (categoriaEncontrada) {
        resolve(categoriaEncontrada.name);
      } else {
        reject("nay");
      }
    }, 2000);
  });
};
// mostrar un loader UI o sea, un spinner de carga
// y en el finally oculto ese loader y mostrar la respuesta

const getPeliculasByCategoria = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pelis = peliculas
        .filter((p) => name === p.categoria)
        .map((p) => p.titulo);
      resolve(pelis);
    }, 2000);
  });
};

// suponer que solko se tiene el id de genero del cual quiero obtener las peluculas

const id = 30;

// forma 1
getCategoriaById(id)
  .then((categoria) => {
    console.log("categoria: ", categoria);
    getPeliculasByCategoria(categoria).then((pelis) => {
      console.log("pelis: ", pelis);
    });
  })
  .catch((error) => {
    console.log("error:", error);
  });

  //forma 2
getCategoriaById(id)
  .then((nombreDeCategoria) => {
    return getPeliculasByCategoria(nombreDeCategoria);
  })
  .then((pelisEncontradas) => {
    console.log("-------------------------------");
    console.log("pelis encontradas: ", pelisEncontradas);
  })
  .catch((errorGenerico) => {
    console.log("error generico: ", errorGenerico);
  });

  //forma 3 , en una funcion async usando await
const caller = async ()=>{
  const nombreCat = await getCategoriaById(1);
  const pelis = await getPeliculasByCategoria(nombreCat);
  return pelis;
}
caller().then(data =>{ // then es solo cuando se retorna un valor
  console.log('pelissssss final: ',data)  
});