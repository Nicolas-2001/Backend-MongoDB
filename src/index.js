// Constantes
const express = require("express");
const { conectarBD } = require("../config/db");
const cors = require("cors");
const app = express();

// Creación de Rutas
app.get("/", (req, res) => {
    res.send({
        msg: "Bienvenido",
    });
});

conectarBD();
app.use(cors());
app.use(express.json());
app.use("/api/clientes", require("../routes/rutasClientes"));
app.use("/api/productos", require("../routes/rutasProductos"));
app.use("/api/proveedor", require("../routes/rutasProveedor"))

// Inicialización del servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://127.0.0.1:3000");
});
