import pgService from "../services/pg.service.js";

export const getProductoModel = async () => {
    const pg =  new pgService(); 
    return  await  pg.connection.query("SELECT * FROM producto");
}
 
export const getProductoUnicoModel = async (id) => {
    const pg =  new pgService(); 
    return  await  pg.connection.query(`SELECT * FROM producto
    where id_producto =  $1`, [id]);
}
export const postProductoModel = async (nombre, detalle, valor ) => {
    try{
        const pg =  new pgService(); 
        pg.connection.none(`INSERT INTO PRODUCTO 
        (NOMBRE, DETALLE , VALOR)  
        VALUES 
        ($1, $2, $3)
        ` ,[nombre,detalle, valor]);
        return  'Transacción realizada';
    }catch(error){ 
        return 'En este momento no se puede realizar su transacción';
    }

}
 