const {crearArchivo}=require('./helpers/multiplicar2');

console.clear();
const base=4;
crearArchivo(base)
    .then(nombreArchivo=>console.log(nombreArchivo,'Creado'))
    .catch(err=>console.log(err));