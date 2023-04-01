const numeros = [5, 20, 12, 6, 80, 9, 61];

// [].forEach: callback se ejecuta n veces
numeros.forEach((elemento, index, arreglo) => {
  console.log("elemento", elemento);
  console.log("index", index);
  console.log("arreglo", arreglo);
});

console.log("-------------------------fin---------------");
const precios = [52.1, 80, 90.5, 23.5, 45.5];

// [].map: devuelve la misma cantidad de elementos, si no hay return revuelve undefined

const precio2 = precios.map((elemento, index, arreglo) => {
  console.log("elemento", elemento);
  console.log("index", index);
  console.log("arreglo", arreglo);
  return elemento + 5.0;
});

console.log(precio2);
console.log("-------------------------fin---------------");

const products = [
  {
    name: "Widget",
    price: 39.99,
    code: "MNO345",
    color: "red",
  },
  {
    name: "Gadget",
    price: 29.99,
    code: "DEF456",
    color: "yellow",
  },
  {
    name: "Thingamajig",
    price: 9.99,
    code: "DEF456",
    color: "purple",
  },
  {
    name: "Doohickey",
    price: 29.99,
    code: "MNO345",
    color: "green",
  },
  {
    name: "Thingamajig",
    price: 9.99,
    code: "JKL012",
    color: "purple",
  },
];

const productosNuevos = products.map((item, index) => {
  return { ...item, key: index };
});
console.log(productosNuevos);

console.log(products.map((item, index) => ({ ...item, key: index })));
