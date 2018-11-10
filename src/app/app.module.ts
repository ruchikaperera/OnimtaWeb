import { StockAdjusmentComponent } from './Modules/stock-management/stock-control/stock-adjusment/stock-adjusment.component';
import { StockControlComponent } from './Modules/stock-management/stock-control/stock-control.component';
import { StockManagementModule } from './Modules/stock-management/stock-management.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {MenuModule} from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { SettingsComponent } from './settings/settings.component';
import {AccordionModule} from 'primeng/accordion';
import { ChipsModule } from 'primeng/chips';
import {MenubarModule} from 'primeng/menubar';
import { ProductMasterComponent } from './product-master/product-master.component';
import { ProductService } from './services/product.service';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { PanelMenuModule, BasePanelMenuItem } from 'primeng/panelmenu';
import { AppHomeComponent } from './app-home/app-home.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { GrowlModule } from 'primeng/growl';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { MessageServiceComponent } from './common-components/message-service/message-service.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressBarComponent } from './common-components/progress-bar/progress-bar.component';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { CompanyGroupSummeryComponent } from './product-master/company-group-summery/company-group-summery.component';
import { CompanyGroupSettingsComponent } from './product-master/company-group-settings/company-group-settings.component';
import { ProductHierarchyComponent } from './product-master/product-hierarchy/product-hierarchy.component';
import { ProductDetailsComponent } from './product-master/product-details/product-details.component';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule, Dialog } from 'primeng/dialog';
import { CustomerDetailsComponent } from './Customer/customer-details/customer-details.component';
import { AddNewProductComponent } from './product-master/add-new-product/add-new-product.component';
import { TopMenuBarComponent } from './common-components/top-menu-bar/top-menu-bar.component';
import {FieldsetModule} from 'primeng/fieldset';
import {InputMaskModule} from 'primeng/inputmask';
import {CheckboxModule} from 'primeng/checkbox';
import { AuthGuard, IsAdmin } from './auth.guard';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { NewPurchaseOrderComponent } from './Modules/stock-management/stock-control/new-purchase-order/new-purchase-order.component';
import { NewStockTransferComponent } from './Modules/stock-management/stock-control/new-stock-transfer/new-stock-transfer.component';






@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ProductMasterComponent,
    StockControlComponent,
    NewPurchaseOrderComponent,
    NewStockTransferComponent,
    AppMenuComponent,
    StockAdjusmentComponent,
    AppHomeComponent,
    MessageServiceComponent,
    ProgressBarComponent,
    CompanyGroupSummeryComponent,
    CompanyGroupSettingsComponent,
    ProductHierarchyComponent,
    ProductDetailsComponent,
    CustomerDetailsComponent,
    AddNewProductComponent,
    TopMenuBarComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    ToolbarModule,
    BreadcrumbModule,
    ConfirmDialogModule,
    SplitButtonModule,
    SidebarModule,
    InputMaskModule,
    ScrollPanelModule,
    CheckboxModule,
    AccordionModule,
    FieldsetModule,
    MenuModule,
    DialogModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TabViewModule,
    TabMenuModule,
    FormsModule,
    OrganizationChartModule,
    DataViewModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    TableModule,
    PanelModule,
    CalendarModule,
    ChartModule,
    GrowlModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    ChipsModule,
    CardModule

  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
    ,
    ProductService,
    AuthGuard,
    IsAdmin,
    ConfirmationService,
    MessageServiceComponent,
    ProgressBarComponent,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
