import { checkSchema } from  'express-validator';

export const productoValidator = checkSchema({
    usuario: {
      errorMessage: 'Usuario invalido',
      notEmpty: true
    },
    contraseña: {
      notEmpty: false,
      isLength: {
        options: { min: 8 },
        errorMessage: 'Password debe tener minimo 8 caracteres',
      },
    },
    cantidad: {
      matches : { options : /\b\d{5}\b/g},
      errorMessage: 'la cantidad debe ser un múmero'
    }
} ,["query"]);