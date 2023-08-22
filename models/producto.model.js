import pgService from "../services/pg.service.js";

export const getProductoModel = async () => {
    const pg =  new pgService(); 
    return  await  pg.connection.query("SELECT * FROM producto");

}

const psotProducto = async(data) => {
    await pg.none("INSERT INTO producto (nombre ) values($1) ",
                                [data])
    return 'Registro realizado exitosamente';
}