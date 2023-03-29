const producto = {
  nombre: "iPhone 14 pro",
  precio: 5500,
  codigo: 5,
  stock: 80,
  colores: ["negro", "azul", "rojo"],
};

const producto2 = { ...producto };

console.log(producto2);

const { nombre, precio, ...resto } = producto;

console.log("nombre : ", nombre);
console.log("precio : ", precio);
console.log("resto : ", resto);

/**
 * desestructurando atributos con nuevos nombres de variables
 */

const { precio: precioProducto } = producto;
console.log(precioProducto);

//ejemplo
const random = (atributos) => {
  const { min, max } = atributos;
  return Math.random() * (max - min) + min;
};

console.log(random({
    max:500,
    min:200
}))