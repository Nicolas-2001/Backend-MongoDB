// Configurar base de Datos
const mongoose = require("mongoose");
require("dotenv").config();

const conectarBD = () => {
    mongoose
        .connect(process.env.DB_MONGO)
        .then(() => console.log("Conexión Exitosa con el Servidor de Mongo"))
        .catch((error) => console.log(error));
};

module.exports = {
    conectarBD,
};
