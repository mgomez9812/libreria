

export interface Proventa {
    codigo: number;
    nombre : Text;
    description: Text;
    existencia : number;
    precio: number;
    marca: number;
    categoria: number;
}


// export interface iCliente {
//     primerNombre: Text,
//     segundoNombre: Text,
//     tercerNombre: Text,
//     primerApellido: Text, 
//     segundoApellido: Text,
//     tercerApellido: Text,
//     telefono: Text,
//     direccion: Text,
//     nit: Text
// }

// export interface iRepresentante{
//     primerNombre: Text,
//     segundoNombre: Text,
//     tercerNombre: Text,
//     primerApellido: Text, 
//     segundoApellido: Text,
//     tercerApellido: Text,
//     telefono: Text,
//     empresaRepresentante: Text
// }


// export interface iProveedor {
//     nombreEmpresa: Text,
//     nit: Text, 
//     direccion: Text,
//     representante: Text,
//     descripcion: Text
// }

// export interface iServicio {
//     nombreServicio: Text,
//     precio: number,
//     descripcion: Text
// }

// export interface iSucursal {
//     nombre: Text,
//     direccion: Text,
//     encargado: Text
// }

// export interface iUsuario {
//     primerNombre: Text,
//     segundoNombre: Text,
//     tercerNombre: Text,
//     primerApellido: Text, 
//     segundoApellido: Text,
//     tercerApellido: Text,
//     telefono: Text,
//     direccion: Text,
//     userName: Text
// }

// export interface iLogin {
//     userName: Text,
//     password: Text,
//     typeUser: Text,
//     sucursalId: number
// }

// export interface iVentas {
//     datosCliente: Text,
//     nitCliente: Text,
//     datosVendedor: Text,
//     datosSucursal: Text,
//     descripcion: Text
// }

// export interface iMarca{
//     nombre: Text,
//     proveedor: Text,
//     estado: number
// }

// export interface iCategoria {
//     nombre: Text,
//     estado: number,
// }
// export interface iFactura {
//     nitFactura: Text,
//     nombreFactura: Text,
//     fecha: Date
// }

// export interface iDetalleFactura {
//     codigoProducto: number,
//     nombreProducto: Text,
//     precioUnidad: number,
//     unidades: number,
//     total: number
// }