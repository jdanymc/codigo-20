/**
 * Las promesas tiene 2 partes importantes
 * 1. creacion de la promesa
 * 2. consumo de promesa
 * Por lo general, nosotros consumiremos promesas, pocas veces
 * las creareamos
 */

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve(456);
    const aleatorio = Math.round( Math.random() * 100);
    console.log(aleatorio);
    if (aleatorio % 2 === 0) {
      resolve("exitoso!");
    } else {
      reject("error 404");
    }
  }, 2000);
});

/**
 * 2. consumo de una promesa
 * promesa.then(()=>{})
 * then es el metodo que recive un callback conl adata que la promesa
 * nos retorna cuando dicha promesa sea exitosa
 *
 * promesa.catch(()=>{})
 * catch es un metodo que recibe un callback con el error que la promesa
 * retorna cuando promesa falla en el intento
 */

miPromesa
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log("error", error);
}).finally(()=>{
      console.log("la verdadera despedida");
  });

  console.log('despedida');