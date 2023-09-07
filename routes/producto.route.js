import { Router } from "express";
import { getAll , postProducto } from "../controllers/producto.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import {postProductoValidator} from "../validators/producto.validator.js";

const router = Router();

router.get("/", getAll )  
router.post("/", validate(postProductoValidator) , postProducto )  
export default router;