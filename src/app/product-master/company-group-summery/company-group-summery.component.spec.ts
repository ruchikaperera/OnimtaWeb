import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGroupSummeryComponent } from './company-group-summery.component';

describe('CompanyGroupSummeryComponent', () => {
  let component: CompanyGroupSummeryComponent;
  let fixture: ComponentFixture<CompanyGroupSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGroupSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGroupSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
