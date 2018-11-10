import { NewPurchaseOrderComponent } from './stock-control/new-purchase-order/new-purchase-order.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockControlComponent } from './stock-control/stock-control.component';
import { StockAdjusmentComponent } from './stock-control/stock-adjusment/stock-adjusment.component';
import { NewStockTransferComponent } from './stock-control/new-stock-transfer/new-stock-transfer.component';

@NgModule({
  imports: [
    CommonModule,
    NewPurchaseOrderComponent,
    StockAdjusmentComponent,
    NewStockTransferComponent
  ],
  declarations: [StockControlComponent]
})
export class StockManagementModule { }
