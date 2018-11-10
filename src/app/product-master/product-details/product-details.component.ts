import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {


  cars: Car[];

  selectedCar: Car;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  visible: boolean;


  constructor() { }


  ngOnInit() {
    this.cars = [{ brand: 'aa', year: 'bb', color: '200' },
    { brand: 'aa', year: 'bb', color: '200' },
    { brand: 'aa', year: 'bb', color: '200' },
    { brand: 'cc', year: 'bb', color: '200' }
      , { brand: 'aa', year: 'bb', color: '200' },
    { brand: 'aa', year: 'bb', color: '200' },
    { brand: 'aa', year: 'bb', color: '200' },
    { brand: 'aa', year: 'bb', color: '200' }];
    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Brand', value: 'brand' }
    ];
  }

  selectCar(event: Event, car: Car) {
    this.selectedCar = car;
    this.displayDialog = true;
    event.preventDefault();
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
  brand: string;
  year: string;
  color: string;
}
