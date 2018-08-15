import { SucursalesModule } from './sucursales.module';

describe('ClientModule', () => {
  let sucursalesModule: SucursalesModule;

  beforeEach(() => {
    sucursalesModule = new SucursalesModule();
  });

  it('should create an instance', () => {
    expect(sucursalesModule).toBeTruthy();
  });

});
