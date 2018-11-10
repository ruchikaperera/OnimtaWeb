import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-stock-control',
  templateUrl: './stock-control.component.html',
  styleUrls: ['./stock-control.component.css']
})
export class StockControlComponent implements OnInit {


  cars5: Car[];


  totalRecords: number;

  cols: any[];

  frozenCars: Car[];

  frozenCols: any[];

  scrollableCols: any[];

  sales: any[];

  loading: boolean;


  items: MenuItem[];

  purchaseOrder: OrderDetail[];

  constructor() { }

  ngOnInit() {


    this.purchaseOrder = [{
      orderNo: 3535, date: '2018-2-2', vendor: 'SLIIT', status: 'Issued', isRecieved: true, isBilled: false, amount: 1000},
    { orderNo: 38535, date: '2018-6-2', vendor: 'SLIIT', status: 'Issued', isRecieved: true, isBilled: false, amount: 1000 },
    { orderNo: 3535, date: '2018-2-2', vendor: 'SLIIT', status: 'Issued', isRecieved: true, isBilled: false, amount: 1000 },
    { orderNo: 3535, date: '2018-2-2', vendor: 'SLIIT', status: 'Issued', isRecieved: true, isBilled: false, amount: 1000 },
    { orderNo: 3535, date: '2018-2-2', vendor: 'SLIIT', status: 'Issued', isRecieved: true, isBilled: false, amount: 1000 },
    { orderNo: 3535, date: '2018-2-2', vendor: 'SLIIT', status: 'Issued', isRecieved: true, isBilled: false, amount: 1000 },
    {orderNo: 3535, date: '2018-2-2', vendor: 'SLIIT', status: 'Issued', isRecieved: true, isBilled: false, amount: 1000
    }];
    this.items = [
      {
        label: 'Purchase Order', icon: 'pi pi-plus', routerLink: ['new-purchase-order']
      },
      {
        label: 'Stock Transfer', icon: 'pi pi-times', routerLink: ['new-stock-transfer']
      },
      { label: 'Stock Adjusment', icon: 'pi pi-info', routerLink: ['new-stock-adjusment'] }
    ];



    this.scrollableCols = [
      { field: 'date', header: 'Date' },
      { field: 'vendor', header: 'Vendor' },
      { field: 'status', header: 'Status' },
      { field: 'year', header: 'Year' },
      { field: 'isRecieved', header: 'Recieved' },
      { field: 'isBilled', header: 'Billed' },
      { field: 'amount', header: 'Amount' },
    ];

    this.frozenCols = [
      { field: 'orderNo', header: 'Order No' },
    ];


    this.totalRecords = 250000;
    this.loading = true;
  }


  loadDataOnScroll(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      // this.cars5 = [
      //   { brand: "VW", year: 2012, color: "Orange", vin: event.first },
      // ];

      this.loading = false;
    }, 1000);

  }
}

export interface Car {
  vin;
  year;
  brand;
  color;
}

export interface OrderDetail {
  orderNo;
  date;
  vendor;
  status;
  isRecieved;
  isBilled;
  amount;
}


