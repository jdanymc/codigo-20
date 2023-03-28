// objetos

const persona = {
    nombre: 'Yuli',
    dni: '12345678',
    telefono:'974858585',
    idiomas: ['Español','Inglés','Francés']
}

console.log(persona);
persona.idiomas.push('Aymara')
console.log(persona.idiomas);

persona.telefono ='999999999'

console.log('persona actualizada',persona);

persona.direccion = {};
persona.direccion.calle = 'Lima';
persona.direccion.distrito='Mitaflores';
persona.direccion.ciudad='Arequipa';

console.log('persona actualizada',persona);


persona.estudios={
    primaria:'Edcuela de los Andes',
    secundaria:'Colegio Nuestra Señora de Fatima',
    superior: 'UNMSM'
}

console.log('persona actualizada',persona);
