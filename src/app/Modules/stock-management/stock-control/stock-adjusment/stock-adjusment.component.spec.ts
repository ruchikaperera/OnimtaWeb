import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAdjusmentComponent } from './stock-adjusment.component';

describe('StockAdjusmentComponent', () => {
  let component: StockAdjusmentComponent;
  let fixture: ComponentFixture<StockAdjusmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockAdjusmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAdjusmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
