import { VendedorModule } from './vendedor.module';

describe('VendedorModule', () =>{
    let vendedorModule: VendedorModule;

    beforeEach( ()=>{
        vendedorModule = new VendedorModule();
    });

    it('should create an instance', () => {
        expect(vendedorModule).toBeTruthy();
    });


}
);