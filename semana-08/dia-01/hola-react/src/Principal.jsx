import Articulo from "./Articulo";

function Principal() {
  const articulo1 = {
    titulo: "Articulo 1",
    imagen: "https://placehold.co/300",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };
  const articulo2 = {
    titulo: "Articulo 2",
    imagen: "https://placehold.co/400",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo, aperiam culpa pariatur asperiores quidem corporis molestias natus similique vitae praesentium earum mollitia animi voluptatum quod ab ad fugit magnam.",
  };

  const articulo3 = {
    titulo: "Articulo 3",
    imagen: "https://placehold.co/250",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo, aperiam culpa pariatur asperiores quidem corporis molestias natus similique vitae praesentium earum mollitia animi voluptatum quod ab ad fugit magnam.",
  };

  const elemento = [
    <Articulo info={articulo1} />,
    <Articulo info={articulo2} />,
    <Articulo info={articulo3} />,
  ];
  const articulos = [articulo1, articulo2, articulo3];
  const resultado = articulos.map((articulo) => {
    return <Articulo info={articulo} />;
  });
  return (
    <div>
      <h2>Articulos detallados</h2>
      {resultado}
      {/*<Articulo info={articulo1} />
      <Articulo info={articulo2} />
      <Articulo info={articulo3} />
  {elemento}*/}
    </div>
  );
}

export default Principal;
