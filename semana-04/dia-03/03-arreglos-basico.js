const libros = ["HP1", "HP2", "HP3"];
console.log(libros);
console.log(libros[3]);

const notas = [7, 5, 3, 13, 6, 12];
console.log("notas" + notas);
console.log("suma de la 1ra con la ultima", notas[0] + notas[5]);

notas[4] = 20;

console.log("notas nuevas", notas);

//propiedades

console.log("Cantidad de libros");
console.log(libros.length);

console.log("Cantidad de notas");
console.log(notas.length);
libros.push("Aves sin nido");
console.log(libros);

//recorriendo un arreglo

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
    
}
let par = 0;
let impar = 0;
let a_par = [];
let a_impar = [];

for (let i = 0; i < notas.length; i++) {
    if(notas[i]%2===0){
        par++;
        a_par.push(notas[i]);
    }else{
        impar++;
        a_impar.push(notas[i]);
    }
}

console.log('Pares: ',par);
console.log(a_par);
console.log('Impares: ',impar);
console.log(a_impar);


//ejercicio
// al enunciado anterior
//imprimir tambien que numeros son pares en impares