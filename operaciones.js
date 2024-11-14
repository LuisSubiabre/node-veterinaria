const fs = require('fs');

const registrar = (argumento) => {



    // fs.open('citas.json ', 'r', (err, fd) => {
    //     if (err) {
    //         console.log('Archivo no encontrado, creando archivo');
    //         fs.writeFileSync('citas.json', '[]');
    //     }
    // });
    const data = fs.readFileSync('citas.json', 'utf-8');
    const nuevoObjeto = JSON.parse(data);

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
    const fileJson = fs.readFileSync('citas.json', 'utf-8');
    JSON.parse(fileJson).forEach(element => {
        console.log(element);
    });
    console.log("Total de citas: " + JSON.parse(fileJson).length);
}

module.exports = { registrar, leer };