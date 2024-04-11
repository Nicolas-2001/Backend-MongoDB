const Proveedor = require("../models/Proveedor");

exports.agregarProveedor = async (req, res) => {
    try {
        const proveedor = new Proveedor(req.body);
        await proveedor.save();
        res.status(201).json({
            mensaje: "Proveedor creado exitosamente",
            proveedor: proveedor,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Hubo un error al crear el proveedor",
            error: error,
        });
    }
};

exports.obtenerProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.status(200).json({
            mensaje: "Proveedores obtenidos exitosamente",
            proveedores: proveedores,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Hubo un error al obtener los proveedores",
            error: error,
        });
    }
};

exports.obtenerProveedorPorId = async (req, res) => {
    try {
        const proveedor = await Proveedor.findById(req.params.id);
        if (!proveedor) {
            return res.status(404).json({
                mensaje: "No se encontró un proveedor con ese ID",
            });
        }
        res.status(200).json({
            mensaje: "Proveedor obtenido exitosamente",
            proveedor: proveedor,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Hubo un error al obtener el proveedor",
            error: error,
        });
    }
};

exports.actualizarProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!proveedor) {
            return res.status(404).json({
                mensaje: "No se encontró un proveedor con ese ID",
            });
        }
        res.status(200).json({
            mensaje: "Proveedor actualizado exitosamente",
            proveedor: proveedor,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Hubo un error al actualizar el proveedor",
            error: error,
        });
    }
};

exports.eliminarProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findByIdAndDelete(req.params.id);
        if (!proveedor) {
            return res.status(404).json({
                mensaje: "No se encontró un proveedor con ese ID",
            });
        }
        res.status(200).json({
            mensaje: "Proveedor eliminado exitosamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Hubo un error al eliminar el proveedor",
            error: error,
        });
    }
};

exports.modificarProveedor = async (req, res) => {
    try {
        const proovedor = await Proveedor.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!proovedor) {
            res.status(404).send({
                msg: "No existe un Proovedor con este Id",
            });
            return;
        }
        res.send({
            msg: "Usuario Actualizado Exitosamente",
            proovedor,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: `Hubo un error al buscar el Proovedor con el id ${req.params.id}`,
            error,
        });
    }
};
