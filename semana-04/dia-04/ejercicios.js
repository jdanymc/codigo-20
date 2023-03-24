function CallMenu(){
    let nro_ejercicio = +prompt("1.- Suma de dos numeros\n2.- Promedio de cuatro numeros\n3.- Area de un rectangulo.\n4.- Area de un triangulo.\n5.- Area de una circunferencia.\n\nIngresa el numero de ejercicio que deseas ejecutar:");

    let valor_1 = 0;
    let valor_2 = 0;
    let valor_3 = 0;
    let valor_4 = 0;

    switch(nro_ejercicio) {
        case 1:
            valor_1  = +prompt("Ingresa el primer numero");
            valor_2  = +prompt("Ingresa el segundo numero");
            alert('El resultado es: '+ sumar(valor_1, valor_2));
            break;
        case 2:
            valor_1  = +prompt("Ingresa el primer numero");
            valor_2  = +prompt("Ingresa el segundo numero");
            valor_3  = +prompt("Ingresa el tercer numero");
            valor_4  = +prompt("Ingresa el cuarto numero");
            alert('El Promedio de los 4 numeros es: '+ promedio(valor_1, valor_2, valor_3, valor_4));
            break;
        case 3:
            valor_1  = +prompt("Ingresa la BASE del rectangulo:");
            valor_2  = +prompt("Ingresa la ALTURA del rectangulo:");
            alert('El area del rectangulo de '+valor_1+' y '+valor_2+' es: '+ area_rectangulo(valor_1, valor_2));
            break;
        case 4:
            valor_1  = +prompt("Ingresa la BASE del triangulo");
            valor_2  = +prompt("Ingresa la ALTURA del triangulo");
            alert('El area del triangulo de '+valor_1+' y '+valor_2+' es: '+ area_triangulo(valor_1, valor_2));
            break;
        case 5:
            valor_1  = +prompt("Ingresa el valor de RADIO:");
            alert('El area de la circunferencia de RADIO '+valor_1+' es: '+ area_circunferencia(valor_1));
            break;
        default:
            alert("No ingresO un numero valido.")
    }
    
}

function sumar(a, b) {
    return a+b;
}

function promedio(a, b, c, d) {
    return (a+b+c+d)/4;
}

function area_rectangulo(base, altura) {
    return base*altura;
}

function area_triangulo(base, altura){
    return (base*altura)/2;
}

function area_circunferencia(radio) {
    let pi = 3.1416;
    return (pi*radio*radio);
}