const express = require("express");
const router = express.Router();
const proveedorController = require("../controllers/proveedorController")

router.post("/", proveedorController.agregarProveedor);
router.get("/", proveedorController.obtenerProveedores);
router.get("/:id", proveedorController.obtenerProveedorPorId);
router.put("/:id", proveedorController.actualizarProveedor);
router.patch("/:id", proveedorController.modificarProveedor);
router.delete("/:id", proveedorController.eliminarProveedor);

module.exports = router;
