console.log(promedioDosNumeros(2, 4));

function promedioDosNumeros(num1, num2) {
  return (num1 + num2) / 2;
}

const calculaEdad = (anioNacimiento) => 2023 - anioNacimiento;

console.log(calculaEdad(2000));

const sumarNNumeros = (...numeros) => {
  let suma = 0;
  numeros.forEach((valor) => {
    suma += valor;
  });
  return suma;
};

console.log(sumarNNumeros(10, 50, 1, 2));



const ternarios = (num1, num2)=>{
    return num1!== num2 ? "Son diferentes": "Son iguales";
}

console.log(ternarios(13,13))