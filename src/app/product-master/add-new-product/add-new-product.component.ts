import { InputTextModule } from 'primeng/inputtext';
import { Attribute } from './../company-group-settings/company-group-settings.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  constructor() { }

  attributeList: Attribute[];
  results: string[] = [];
  result: Result[] = [];
  index: number;

  myStyles: any;

  ngOnInit() {

    this.myStyles = {
      'background-color': 'lime',
      'font-size': '20px',
      'font-weight': 'bold'
      };
    this.index = 0;
    this.attributeList = [
  {id: 1 , name: 'Department' },
  {id: 2 , name: 'Category' },
  {id: 3 , name: 'Supplier' },
  {id: 4 , name: 'Brand' }

    ];

    this.result = [
      {id: 1 , name: 'A' },
      {id: 2 , name: 'B' },
      {id: 3 , name: 'C' },
      {id: 4 , name: 'D' },
      {id: 5 , name: 'E' },
        ];
  }


  save() {
 console.log(this.results);
 console.log(this.attributeList);
  }

  test(ev: Event) {

    console.log('drop down clicked getting results...');
    console.log(this.results);
    console.log(ev);
  }

}


export interface Attribute {
  id: number;
  name: string;

}


export interface Result {
  id: number;
  name: string;
}
