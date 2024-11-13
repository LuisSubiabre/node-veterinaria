const fs = require('fs');

const registrar = () => {
    const animal = [
        {
            nombre: 'Susuki',
            edad: '1 año',
            tipo: 'Perro',
            color: 'Café',
            enfermedad: 'Ninguna'
        }
    ]
    fs.writeFile('citas.json', JSON.stringify(animal), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Archivo creado');
        }
    });
}

const leer = () => {
    console.log('Leyendo usuario');
    fs.readFile('citas.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(JSON.parse(data));
        }
    });
}

module.exports = { registrar, leer };