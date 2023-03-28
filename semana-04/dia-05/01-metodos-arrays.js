const alumnos = ["Juan", "Pedro", "Maria", "Jose", "Luis"];

// 1.length

for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}

console.log("-------------------------------");

//forEach
alumnos.forEach((alumno, index) => {
  console.log(alumno, index);
});

console.log("-------------------------------");

//map

const nuevosAlumnos = alumnos.map((alumno, index) => {
  /*if(alumno==='Pedro'){
        return alumno +  ' '+ index;
    }
    else{
        return alumno;
    }*/

  return `${alumno} ${index}`;
});

//console.log(nuevosAlumnos);

console.log("-------------------------------");

//filter

const alumnoSinMaria = alumnos.filter((alumno, index) => {
  return alumno !== "Maria";
});

console.log(alumnoSinMaria);
console.log("-------------------------------");

//find

const alumnoEncontrado = alumnos.find((alumno, index) => {
  return alumno === "Maria";
});

console.log(alumnoEncontrado);
console.log("-------------------------------");

//findIndex

const indexAlumno = alumnos.findIndex((alumno) => {
  return alumno === "Luis";
});

console.log(indexAlumno);

console.log("-------------------------------");

//some
const existeAlumno = alumnos.some((alumno)=>{
    return alumno==='Maria';
})

console.log(existeAlumno);
console.log("-------------------------------");

const focos = ["verde", "rojo", "blanco", "blanco"];

const contarFocos = () => {
  let focosBlancos = 0;
  let focosVerdes = 0;
  let focosRojos = 0;

  for (let index = 0; index < focos.length; index++) {
    if (focos[index] === "blanco") {
      focosBlancos++;
    }
    if (focos[index] === "verde") {
      focosVerdes++;
    }
    if (focos[index] === "rojo") {
      focosRojos++;
    }
  }
  return {
    focosBlancos,
    focosVerdes,
    focosRojos,
  };
};
console.log(contarFocos());
