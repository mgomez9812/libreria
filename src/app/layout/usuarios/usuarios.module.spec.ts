import { UsuariosModule } from './usuarios.module';

describe('ClientModule', () => {
  let usuariosModule: UsuariosModule;

  beforeEach(() => {
    usuariosModule = new UsuariosModule();
  });

  it('should create an instance', () => {
    expect(usuariosModule).toBeTruthy();
  });

});
