import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { productoValidator } from "../validators/producto.validator.js";
const router = Router();

router.get("/", validate(productoValidator) , login ) 

export default router;