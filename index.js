const { registrar, leer } = require('./operaciones');

const argumentos = process.argv.slice(2);

if (argumentos[0] === 'registrar') {
    if (argumentos.length > 6) {
        console.log('Error, demasiados argumentos');
        console.log('Los argumentos son: <operacion> <Nombre del animal> <Edad> <Tipo de animal> <Color del animal> <Enfermedad> ',);
        process.exit();
    }
    else if (argumentos.length < 6) {
        console.log('Error, faltan argumentos');
        console.log('Los argumentos son: <operacion> <Nombre del animal> <Edad> <Tipo de animal> <Color del animal> <Enfermedad> ',);

        process.exit();
    }
    else if (argumentos.length === 6) {
        registrar(argumentos);
    }
} else if (argumentos[0] === 'leer') {
    leer();
} else {
    console.log('Error, operacion no reconocida. Utilice registrar o leer');
    process.exit();
}
