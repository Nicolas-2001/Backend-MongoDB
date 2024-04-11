const mongoose = require("mongoose");

const productoSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        precio: {
            type: Number,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Producto", productoSchema);
