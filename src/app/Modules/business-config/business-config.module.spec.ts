import { BusinessConfigModule } from './business-config.module';

describe('BusinessConfigModule', () => {
  let businessConfigModule: BusinessConfigModule;

  beforeEach(() => {
    businessConfigModule = new BusinessConfigModule();
  });

  it('should create an instance', () => {
    expect(businessConfigModule).toBeTruthy();
  });
});
