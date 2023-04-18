export const getNameAndAbilities = (pokemon) => {
  const result = {
    name: pokemon.name,
    abilities: pokemon.abilities.map((abi) => abi.ability.name),
  };
  return result;
};

export const saludar = () => { console.log("buenas noches"); };

const suma = (a, b) => a + b;

/**
 * export default, exporta una funcion o variable
 * por archivo por archivo
 * - por archivo se permite máximo 1 exportacion por defecto
 */

export default suma;
