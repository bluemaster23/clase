import { getProductoModel } from "../models/producto.model.js";

export const getAll = async (req, res) =>{
    res.json({success: true, data: [] , msg : 'get All'})
}

export async function getProducto (req, res){
    try {
        const data =await getProductoModel();
        res.json({success: true, data: data , msg: 'getProducto'})     
    } catch (error) {
        res.json({success: true, data: [] , msg: 'no se encuentran datos :)'})     
    }
   
}