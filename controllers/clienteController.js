// Controlador de un Modulo
const Cliente = require("../models/Cliente");

// función agregar clientes (POST)
exports.agregarClientes = async (req, res) => {
    try {
        let clientes;
        clientes = new Cliente(req.body);
        await clientes.save();
        res.send({
            cliente: clientes,
            msg: "Cliente Agregado Exitosamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "Hubo un error al agregar un cliente",
            error: error,
        });
    }
};

// Función para buscar Clientes (GET)
exports.buscarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.find();
        res.send({
            msg: "Clientes encontrados",
            cliente,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "Hubo un error al buscar clientes",
            error: error,
        });
    }
};

// Función Buscar Cliente (GET)
exports.buscarCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).send({ msg: "No existe un Cliente con este Id" });
            return;
        }
        res.send({
            msg: "Cliente Encontrado",
            cliente,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "Hubo un error al buscar este cliente",
            error: error,
        });
    }
};

// Eliminar cliente (DELETE)
exports.eliminarCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).send({ msg: "No existe un Cliente con este Id" });
            return;
        }
        await Cliente.findOneAndDelete({ _id: req.params.id }); // Corrección aquí
        res.send({
            msg: "El cliente ha sido Eliminado",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: `Hubo un error al buscar el cliente con el id ${req.params.id}`,
            error,
        });
    }
};

// Actualizar clientes (PUT)
exports.actualizarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!cliente) {
            res.status(404).send({
                msg: "No existe un Cliente con este Id",
            });
            return;
        }
        res.send({
            msg: "Usuario Actualizado Exitosamente",
            cliente,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: `Hubo un error al buscar el cliente con el id ${req.params.id}`,
            error,
        });
    }
};

// Modificar Cliente (PATH)
exports.modificarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!cliente) {
            res.status(404).send({
                msg: "No existe un Cliente con este Id",
            });
            return;
        }
        res.send({
            msg: "Usuario Actualizado Exitosamente",
            cliente,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: `Hubo un error al buscar el cliente con el id ${req.params.id}`,
            error,
        });
    }
};
