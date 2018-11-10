import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStockTransferComponent } from './new-stock-transfer.component';

describe('NewStockTransferComponent', () => {
  let component: NewStockTransferComponent;
  let fixture: ComponentFixture<NewStockTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStockTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStockTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
