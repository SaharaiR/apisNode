//ARCHIVO PARA GUARDAR EN EL ARCHIVO JSON, SI HAY BD NO HAY NECESIDAD DE ESTE ARCHIVO
const fs = require('fs');
const saveToDB = (DB) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2),{
        encoding: "utf8"
    });
}

module.exports = {saveToDB}