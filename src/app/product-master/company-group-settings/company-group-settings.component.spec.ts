import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGroupSettingsComponent } from './company-group-settings.component';

describe('CompanyGroupSettingsComponent', () => {
  let component: CompanyGroupSettingsComponent;
  let fixture: ComponentFixture<CompanyGroupSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGroupSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGroupSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
