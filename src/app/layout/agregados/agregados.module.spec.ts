import { AgregadosModule } from './agregados.module';

describe( 'AgregadosModule', () =>{
    let agregadosModule: AgregadosModule;

    beforeEach(() => {
        agregadosModule = new AgregadosModule();
    });

    it('should create an instance', () => {
        expect(agregadosModule).toBeTruthy();
    });

}
);