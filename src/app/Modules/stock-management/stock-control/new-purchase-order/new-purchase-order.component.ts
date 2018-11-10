import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { ConfirmationService, Message } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';



@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.css']
})
export class NewPurchaseOrderComponent implements OnInit {

  stocks: Stock[] = [];
  suppliers: Supplier[] = [];
  locations: Location[] = [];
  tax: Tax[] = [];
  selectedTax: Tax;
  newStock: Stock = null;
  selectedStock = {} as Stock;
  isSupplierSelected: boolean;
  selectedSupplier: Supplier;
  msgs: Message[] = [];
  display: true;
  purchaseOrderNo: string;




  itemName: string;
  totalPrice: number;
  itemCost: number;
  isSelected: boolean;

  cols: any[];


  totalQuantity: number;


  constructor(private commonServices: CommonService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.selectedTax = null;
    this.purchaseOrderNo = '#4539';
    this.isSelected = true;
    this.isSupplierSelected = false;
    this.totalPrice = 0;
    this.cols = [
      { field: 'itemName', header: 'Item Name' },
      { field: 'qty', header: 'Quantity' },
      { field: 'after', header: 'After' },
      { field: 'itemCost', header: 'Item Cost' },
      { field: 'tax', header: 'Tax (%)' },
      { field: 'total', header: 'Total' }
    ];

    this.suppliers = [
      { id: 1, name: 'IFS' },
      { id: 2, name: 'MIT' },
      { id: 3, name: 'Virtusa' },
      { id: 4, name: 'SLIIT' },
    ];

    this.tax = [
      { id: 1, name: '5%', percentage: 5 },
      { id: 1, name: '10%', percentage: 10 },
      { id: 1, name: '15%', percentage: 15 },
      { id: 1, name: '20%', percentage: 20 }
    ];

    this.locations = [
      { id: 1, name: 'Colombo' },
      { id: 2, name: 'Galle' },
      { id: 3, name: 'Kandy' },
      { id: 4, name: 'Malambe' },
    ];

    // { itemName: 'A', supplierCode: '200', source: 'gg', qty: 10, sourceAfter: 3, destination: 'Colombo', destinationAfter: 67 },
    //   { itemName: 'B', supplierCode: '201', source: 'gg', qty: 11, sourceAfter: 3, destination: 'Galle', destinationAfter: 67 },
    //   { itemName: 'C', supplierCode: '202', source: 'gg', qty: 17, sourceAfter: 3, destination: 'Colombo', destinationAfter: 67 },
    //   { itemName: 'D', supplierCode: '207', source: 'gg', qty: 16, sourceAfter: 3, destination: 'Colombo', destinationAfter: 67 },
    //   { itemName: 'E', supplierCode: '246', source: 'gg', qty: 10, sourceAfter: 3, destination: 'Colombo', destinationAfter: 67 },
    //   { itemName: 'F', supplierCode: '287', source: 'gg', qty: 70, sourceAfter: 32, destination: 'Colombo', destinationAfter: 67 },


    this.stocks = [
      { itemName: 'A', qty: 10, after: 6, itemCost: 150, total: 1500, tax: 10 },
      { itemName: 'B', qty: 20, after: 6, itemCost: 450, total: 9000, tax: 4 },
      { itemName: 'C', qty: 1, after: 6, itemCost: 40, total: 40, tax: 5 },
      { itemName: 'D', qty: 2, after: 6, itemCost: 50, total: 100, tax: 20 }
    ];

    this.calculateTotalPrice();

  }


  savenewPurchaseDetail() {
    console.log(this.selectedStock);
    if (this.selectedStock.itemName) {

      console.log('selected stock', this.selectedTax);
      this.selectedStock.tax = this.selectedStock.tax;
      this.selectedStock.total = (this.selectedStock.itemCost * this.selectedStock.qty) +
        this.selectedStock.itemCost * this.selectedStock.qty * (this.selectedStock.tax / 100);

      this.stocks.push(this.selectedStock);
      this.calculateTotalPrice();
      this.commonServices.showSuccessMessage('New Purchace Added');
      this.selectedStock = {};
    } else {
      this.commonServices.showErrorMessage('Invalid Item. Try Again!');
    }
  }

  updatePurchaseDetails() {
    this.commonServices.showSuccessMessage('New Purchace Added');
  }


  onSupplierselect() {
    console.log(this.selectedSupplier);
    this.isSupplierSelected = true;
  }

  onRowSelect(ev: Event) {


    this.isSelected = false;
  }

  updateSelectedItem() {


    if (this.selectedTax) {
      const itemName = this.selectedStock.itemName;
      this.selectedStock.tax = this.selectedTax.percentage;
      this.selectedStock.total = (this.selectedStock.itemCost * this.selectedStock.qty) +
        this.selectedStock.itemCost * this.selectedStock.qty * (this.selectedTax.percentage / 100);
      const index = this.stocks.findIndex(m => m.itemName === itemName);

      this.stocks[index] = this.selectedStock;

    } else {
      const itemName = this.selectedStock.itemName;
      this.selectedStock.total = (this.selectedStock.itemCost * this.selectedStock.qty) +
        this.selectedStock.itemCost * this.selectedStock.qty * (this.selectedStock.tax / 100);
      const index = this.stocks.findIndex(m => m.itemName === itemName);
      this.stocks[index] = this.selectedStock;
    }

    this.calculateTotalPrice();
    this.clearItems();
    this.commonServices.showSuccessMessage('Order Updated');

  }
  deleteSelectedPurchase() {


    const itemName = this.selectedStock.itemName;

    const index = this.stocks.findIndex(m => m.itemName === itemName);
    this.stocks.splice(index, 1);

    console.log(this.stocks);

    this.calculateTotalPrice();
    this.clearItems();
  }

  addnewPurchaseDetails() {
    this.display = true;

    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
    //  this.commonServices.showErrorMessage('you want to purchase these items ?');
  }

  calculateTotalPrice() {

    this.totalPrice = 0;
    this.stocks.forEach(items => {
      this.totalPrice = this.totalPrice + items.total;
    });

  }

  clearItems() {
    console.log('clear');
    this.isSelected = true;

    this.selectedStock = {};
  }

}
export interface Stock {
  itemName?: string;
  qty?: number;
  after?: number;
  itemCost?: number;
  total?: number;
  tax?: number;
}

export interface Supplier {
  id: number;
  name: string;
}

export interface Tax {
  id: number;
  name: string;
  percentage: number;
}

export interface Location {
  id: number;
  name: string;
}


