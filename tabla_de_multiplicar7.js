const {crearArchivo}=require('./helpers/multiplicar4');
const argv=require('./config/yargs');
require('colors');

console.clear();

crearArchivo(argv.b, argv.l)
            .then(nombreArchivo=>console.log(nombreArchivo.rainbow,'Creado'))
            .catch(err=>console.log(err));