import { Router } from "express";
import { getAll , getProducto, enviarCorreo } from "../controllers/producto.controller.js";

const router = Router();

router.get("/", getAll )
router.post("/mail", enviarCorreo );
router.get("/:id", getProducto );

export default router;