let hoy = new Date();

console.log("hoy : ", hoy);

// obtiene el año de la fecha
console.log("año : ", hoy.getFullYear());

//obtiene el mes del año iniciando en cero
const meses = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "set",
  "oct",
  "nov",
  "dic",
];
console.log("mes : ", hoy.getMonth() + 1, "-", meses[hoy.getMonth()]);

//obtiene el numero del dia del mes
console.log("dia del mes : ", hoy.getDate());

/**
 *
 */

console.log(hoy.getHours());
console.log(hoy.getMinutes());
console.log(hoy.getSeconds());

//retorna el dia de la semana
const semana = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
console.log(hoy.getDay());
console.log("dia de la semana: ", semana[hoy.getDay()]);

/**
 * inicializando fechas distintas a hoy
 */
let fiestasPatrias = new Date(2023, 6, 28);

console.log(fiestasPatrias);

const mili = fiestasPatrias - hoy;
const diasPara28Julio = mili / 1000 / 60 / 60 / 24;
console.log('dias para 28 de julio : ',diasPara28Julio);