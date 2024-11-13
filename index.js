const { registrar, leer } = require('./operaciones');

const argumentos = process.argv.slice(2);
registrar(argumentos);
//leer();