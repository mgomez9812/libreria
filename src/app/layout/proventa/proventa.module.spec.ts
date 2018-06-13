import { ProventaModule } from './proventa.module';

describe('ClientModule', () => {
  let proventaModule: ProventaModule;

  beforeEach(() => {
    proventaModule = new ProventaModule();
  });

  it('should create an instance', () => {
    expect(proventaModule).toBeTruthy();
  });

});
