import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  cols: any[];

    selectedCar1: Car;

    selectedCar2: Car;

    selectedCar3: Car;

    selectedCar4: Car;

    selectedCars1: Car[];

    selectedCars2: Car[];

    selectedCars3: Car[];

  cars: Car[];

  selectedCar: Car;

isVisible: boolean;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  visible: boolean;


  constructor() { }

  name: string;
  Companyname: string;
  Email: string;
  WorkPhone: string;
  Recivables: number;
  Payables: number;

  ngOnInit() {


    this.cols = [
      { field: 'Companyname', header: 'Company Name' },
  ];
    this.isVisible = true;
    this.cars = [
    { name: 'Ruchika' , Companyname: 'Onimta' , Email: 'madubashitharuchika@yahoo.com' ,
     WorkPhone: '0767950019', Recivables: 400 , Payables : 200 },
     { name: 'Hansini' , Companyname: 'IFS' , Email: 'madubashitharuchika@yahoo.com' ,
     WorkPhone: '0382295993', Recivables: 900 , Payables : 100 },
     { name: 'Gayan' , Companyname: 'SLIIT' , Email: 'madubashitharuchika@yahoo.com' ,
     WorkPhone: '0767950019', Recivables: 3400 , Payables : 2000 },
     { name: 'Ruchika' , Companyname: 'Onimta' , Email: 'madubashitharuchika@yahoo.com' ,
     WorkPhone: '0767950019', Recivables: 560 , Payables : 400 }
    ];
    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Recivables -Acsending', value: 'Recivables' },
      { label: 'payable -Acsending', value: 'Payables' },
      { label: 'Recivables -Decending', value: '!Recivables' },
      { label: 'payable Decending', value: '!Payables' },
      { label: 'Brand', value: 'brand' }
    ];
  }

getCustomerDetailsById() {
this.isVisible = false;
}

ShowCustomerList() {

  console.log('close');
  this.isVisible = true;
}



  selectCar(event: Event, car: Car) {
     this.selectedCar = car;
    // this.displayDialog = true;
    // event.preventDefault();
    console.log(this.selectedCar);
    this.isVisible = false;
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedCar = null;
  }
}

export interface Car {

  name: string;
  Companyname: string;
  Email: string;
  WorkPhone: string;
  Recivables: number;
  Payables: number;

}



