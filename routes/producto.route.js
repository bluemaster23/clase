import { Router } from "express";
import { getAll , getProducto } from "../controllers/producto.controller.js";

const router = Router();

router.get("/", getAll )
router.get("/:id", getProducto );

export default router;