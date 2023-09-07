import { getProductoModel,getProductoUnicoModel , postProductoModel  } from "../models/producto.model.js";
 
export const getAll = async (req, res) =>{
    let data = await   getProductoModel(); 
    res.json({success: true, data: data ,   msg : 'get All'})
}

 

export async function getProducto (req, res){
    let data = await   getProductoUnicoModel(); 
    res.json({success: true, data: data ,   msg : 'get All'})
}

export async function postProducto (req, res){
    let {nombre, detalle, valor } = req.body;
    let data = await   postProductoModel(nombre, detalle, valor ); 
    res.json({success: true, data: [] ,   msg : data})
}

 