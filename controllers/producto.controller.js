import { getProductoModel } from "../models/producto.model.js";
import { getProductos } from "../services/apiEscuela.service.js";

export const getAll = async (req, res) =>{
    let data = await   getProductos(); 
    res.json({success: true, data: data ,   msg : 'get All'})
}

export async function getProducto (req, res){
    try {
        const data =await getProductoModel();
        res.json({success: true, data: data , msg: 'getProducto'})     
    } catch (error) {
        res.json({success: true, data: [] , msg: 'no se encuentran datos :)'})     
    }
   
}