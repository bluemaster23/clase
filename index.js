
/**
 * Importación type: Module / ES
 */
 import express, {Router} from 'express';
 import bodyParser from 'body-parser';

/**  
 * Importación Normal, remover del package.json "type": "module"
 * const express  = require("express");
 * const { Router }   = require("express");
 * const bodyParser  = require("body-parser");
*/

/** Inicializadores  */
const app = express();
const router = Router();

/** Middleware */
app.use(bodyParser.json());


/** Routing  */

/**
 * Las rutas se pueden utilizar de esta manera pero:
 * esta ruta acepta todas las peticiones tanto como 
 * GET, POST, PUT, DELETE, ETC...
 */
app.use('/usuario', (req, res)=>{
    res.status(200).send({success:true });
}) 


/**
 * Peticiones sin el ROUTER
 */
app.get('/usuario2', (req, res)=>{
    res.status(200).send({success:false });
}) 
 
app.use(router.post('/producto', (req, res)=> {
    const { nombre } = req.body
    console.log(nombre);
    res.status(200).send({success:true, data : [] , msg : 'postProducto' })
}))

/**
 * Route Anidado
 */
app.use('/producto/',router.get('/otro', (req, res)=> {
    res.status(200).send({success:true , data : [] , msg : 'getProducto' })
}))

const port = 4200;
/**
    Inicializa el servidor 
    @param port: Puerto donde esta estara habilitado el servidor
    @function callback: Función que se ejecuta despues de ejecutar el servidor
*/
app.listen(port, ()=> {console.log("server");})