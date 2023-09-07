import { checkSchema } from  'express-validator';

export const postProductoValidator = checkSchema({
    nombre: {
      errorMessage: 'Usuario invalido',
      notEmpty: true,
      isLength: {
        options: { min: 3 },
        errorMessage: 'El nombre debe tener minimo tres caracteres',
      },
    },
    valor: {
      matches : { options : /[0-9]/},
      errorMessage: 'la cantidad debe ser un múmero'
    }
} ,["body"]);