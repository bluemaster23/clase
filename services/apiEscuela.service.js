import { get }  from 'simple-requests';
import { exports } from "../config/default.js";


export const  getProductos = async () => {
    return await get( `${exports.apiEscuela}/products`,{}).then((res) =>  res.data );
}

