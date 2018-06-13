import { ClientesModule } from './clientes.module';

describe('ClientesModule', () => {
    let clientesModule: ClientesModule;

    beforeEach(() => {
        clientesModule = new ClientesModule();
    });

    it('should create an instance', () => {
        expect(clientesModule).toBeTruthy();
    });

});