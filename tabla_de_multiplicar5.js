const {crearArchivo}=require('./helpers/multiplicar2');

const [,,arg3='base=5']=process.argv;
const [,base=5]=arg3.split('=');
console.clear();

//const base=4;
crearArchivo(base)
    .then(nombreArchivo=>console.log(nombreArchivo,'Creado'))
    .catch(err=>console.log(err));