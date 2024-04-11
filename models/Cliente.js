/* cSpell:disable */
const mongoose = require("mongoose");

// el modelo que se crea aca debe ser igual al que se crea en la vase de datos
const clienteSchema = mongoose.Schema(
    {
        nombres: {
            type: String,
            required: true,
        },
        apellidos: {
            type: String,
            required: true,
        },
        documento: {
            type: Number,
            required: true,
        },
        correo: {
            type: String,
            required: true,
        },
        telefono: {
            type: Number,
            required: true,
        },
        direccion: {
            type: String,
            required: true,
        },
    },
    { versionkey: true }
);

module.exports = mongoose.model("Cliente", clienteSchema);
