function validarSiEsNumero(numero,tipo){
    return isNaN(numero)?`Mensaje Error : no se puede ${tipo}`: numero;
}

function sumar(n1, n2) {
    const resultado = +n1 + +n2;
    return validarSiEsNumero(resultado,'sumar');
}
function restar(n1, n2) {
    const resultado = +n1 - +n2;
    return validarSiEsNumero(resultado,'restar');
}
function multiplicar(n1, n2) {
    const resultado = +n1 * +n2;
    return validarSiEsNumero(resultado,'multiplicar');
}
function dividir(n1, n2) {
    const resultado = +n1 / +n2;
    return validarSiEsNumero(resultado,'dividir');

}
