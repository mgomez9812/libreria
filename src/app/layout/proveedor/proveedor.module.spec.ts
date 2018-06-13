import { ProveedorModule } from './proveedor.module';

describe( 'ProveedorModule', () =>  {
    let proveedorModule: ProveedorModule;

    beforeEach( () => {
        proveedorModule = new ProveedorModule();
    });


    it( 'should create an instance', () =>{
        expect( proveedorModule).toBeTruthy();
    });
});