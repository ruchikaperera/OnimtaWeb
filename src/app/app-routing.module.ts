import { NewStockTransferComponent } from './Modules/stock-management/stock-control/new-stock-transfer/new-stock-transfer.component';
import { AuthGuard, IsAdmin } from './auth.guard';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductMasterComponent } from './product-master/product-master.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { CompanyGroupSummeryComponent } from './product-master/company-group-summery/company-group-summery.component';
import { CompanyGroupSettingsComponent } from './product-master/company-group-settings/company-group-settings.component';
import { CustomerDetailsComponent } from './Customer/customer-details/customer-details.component';
import { AddNewProductComponent } from './product-master/add-new-product/add-new-product.component';
import { StockAdjusmentComponent } from 'src/app/Modules/stock-management/stock-control/stock-adjusment/stock-adjusment.component';
import { StockControlComponent } from './Modules/stock-management/stock-control/stock-control.component';
import { NewPurchaseOrderComponent } from './Modules/stock-management/stock-control/new-purchase-order/new-purchase-order.component';


const routes: Routes = [

  {
    path: 'home',
    component: AppHomeComponent

  },
  {
    path: 'product-master/settings',
    component: CompanyGroupSettingsComponent,
  },
  {
    path: 'stock-control/new-purchase-order',
    component: NewPurchaseOrderComponent,
  },
  {
    path: 'stock-control/new-stock-transfer',
    component: NewStockTransferComponent,
  },
  {
    path: 'stock-control/new-stock-adjusment',
    component: StockAdjusmentComponent,
  },
  {
    path: 'stock-control',
    component: StockControlComponent ,
  },
  {
    path: 'product-master',
    component: ProductMasterComponent,
    canActivate: [IsAdmin]
  },
  {
    path: 'customer-details',
    component: CustomerDetailsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'product-master/summery',
    component: CompanyGroupSummeryComponent
  },
  {
    path: 'product-master/new-product',
    component: AddNewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { /* enableTracing: true */ })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AppComponent];
