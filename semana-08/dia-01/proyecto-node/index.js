/**
 * poner "start": "node index.js"
 * para usar: npm start
 */

/**
 * instalar axios por primera vez : npm install axios
 * descargar dependencias : npm install
 */

//forma antigua
//const axios = require('axios');

//forma nueva agregar "type": "module" -> package.json
import axios from "axios";
import miSuma,{ getNameAndAbilities, saludar as saludarv2 } from "./utils.js";
//import miSuma from "./utils.js";

console.log("Hola mundo, proyecto Node.js");

axios.get("https://pokeapi.co/api/v2/pokemon/4/").then((data) => {
  console.log(getNameAndAbilities(data.data));
});

console.log(miSuma(2, 3));

saludarv2();
// fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
