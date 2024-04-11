const mongoose = require("mongoose");

const proveedoresSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    nit: {
        type: String,
        required: true,
        unique: true,
    },
    contacto: {
        type: {
            nombre: { type: String },
            email: { type: String, lowercase: true, trim: true },
            telefono: { type: String },
        },
        required: true,
    },
    direccion: {
        type: {
            calle: { type: String },
            ciudad: { type: String },
            estado: { type: String },
            codigoPostal: { type: String },
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Proveedor", proveedoresSchema, "proveedores");
