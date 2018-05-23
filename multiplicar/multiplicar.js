const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un número`);
        return;
    }

    console.log('==========================='.green);
    console.log(`======Tabla de ${base}=====`.red);
    console.log('==========================='.green);

    let data = '';

    for (let index = 1; index <= limite; index++) {
        data += `${base} * ${index} = ${base * index} \n`;
        console.log(data);
    }

};

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index} \n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else {
                resolve(`tabla-${base}-al-${limite}.txt`.green)
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}