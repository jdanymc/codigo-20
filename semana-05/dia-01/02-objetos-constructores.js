// un objeto puede tener funciones como atributos

const vehiculo = {
  marca: "Audi",
  modelo: "q5",
  mantenimientos: [
    {
      fecha: "05/05/23",
      kilometraje: 17000,
    },
    {
      fecha: "05/05/24",
      kilometraje: 27000,
    },
    {
      fecha: "05/05/25",
      kilometraje: 37000,
    },
  ],
  imprimirMarcaModelo: function () {
    console.log(this);
    console.log(this.marca, this.modelo);
  },
};

const vehiculo2 = { ...vehiculo };

vehiculo2.marca = "Toyota";

// vehiculo.imprimirMarcaModelo();
// vehiculo2.imprimirMarcaModelo();

function mantenimiento(pFecha = "", pKilometraje = 0, pAceite = false) {
  return { fecha: pFecha, kilometraje: pKilometraje, aceite: pAceite };
}

function creadorDeVehiculos(
  pMarca = "",
  pModelo = "",
  pAnio = -1,
  pMantenimientos = []
) {
  const vehiculoGenerico = {
    marca: pMarca,
    modelo: pModelo,
    anio: pAnio,
    mantenimientos: pMantenimientos
  };

  return vehiculoGenerico;
}

const mazdaCX3 = creadorDeVehiculos("Mazda", "CX3", 2023, [
  mantenimiento("05/05/23", 15000, true),
  mantenimiento("05/05/24", 20000, true),
]);
const bmwX4 = creadorDeVehiculos("BMW", "X4", 2021, [
  { fecha: "27/03/23", kilometraje: 15000 },
]);
const mercedesGLA450 = creadorDeVehiculos();
// mazdaCX3.anio = 2023;
// bmwX4.anio = 2024;

console.log("mazda", mazdaCX3);
console.log("bmwX4", bmwX4);
console.log("mercedesGLA450", mercedesGLA450);
