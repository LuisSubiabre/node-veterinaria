const fs = require('fs');

const registrar = (argumento) => {
    const data = fs.readFileSync('citas.json', 'utf-8');
    const nuevoObjeto = JSON.parse(data);
    const newCita = { argumento };

    const animal = [
        {
            nombre: argumento[1],
            edad: argumento[2],
            tipo: argumento[3],
            color: argumento[4],
            enfermedad: argumento[5]
        }
    ]
    console.log(animal);
    nuevoObjeto.push(...animal);


    fs.writeFileSync('citas.json', JSON.stringify(nuevoObjeto), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Archivo creado');
        }
    });
}



const leer = () => {
    console.log('Leyendo usuario');
    // fs.readFile('citas.json', 'utf-8', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(JSON.parse(data));
    //     }
    // })

    const fileJson = fs.readFileSync('citas.json', 'utf-8');
    JSON.parse(fileJson).forEach(element => {
        console.log(element);
    });
}

module.exports = { registrar, leer };