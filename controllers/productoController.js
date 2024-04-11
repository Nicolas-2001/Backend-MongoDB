const Producto = require("../models/Producto");

exports.agregarProducto = async (req, res) => {
    try {
        const producto = new Producto(req.body);
        await producto.save();
        res.status(201).json({
            mensaje: "Producto creado exitosamente",
            producto: producto,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Hubo un error al crear el producto",
            error: error,
        });
    }
};

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json({
            mensaje: "Productos obtenidos exitosamente",
            productos: productos,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Hubo un error al obtener los productos",
            error: error,
        });
    }
};

exports.obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({
                mensaje: "No se encontró un producto con ese ID",
            });
        }
        res.status(200).json({
            mensaje: "Producto obtenido exitosamente",
            producto: producto,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Hubo un error al obtener el producto",
            error: error,
        });
    }
};

exports.actualizarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!producto) {
            return res.status(404).json({
                mensaje: "No se encontró un producto con ese ID",
            });
        }
        res.status(200).json({
            mensaje: "Producto actualizado exitosamente",
            producto: producto,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Hubo un error al actualizar el producto",
            error: error,
        });
    }
};

exports.eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) {
            return res.status(404).json({
                mensaje: "No se encontró un producto con ese ID",
            });
        }
        res.status(200).json({
            mensaje: "Producto eliminado exitosamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Hubo un error al eliminar el producto",
            error: error,
        });
    }
};
