import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';


@Component({
  selector: 'app-product-hierarchy',
  templateUrl: './product-hierarchy.component.html',
  styleUrls: ['./product-hierarchy.component.css']
})
export class ProductHierarchyComponent implements OnInit {

  constructor() { }

  data: TreeNode[];
  companyName: string;
  products: string[] = [];
  testData: Tree[] = [];

    ngOnInit() {


      this.products = ['Textile', 'F&B' ];
      this.companyName = 'Onimta-IT';
this.loadData();
}


loadData() {
  this.data = [{
    label: this.companyName,
    children: [
        {

            label: this.products[0],
            children: [
                {
                    label: 'Grandchild 1.1'
                },
                {
                    label: 'Grandchild 1.2'
                }
            ]
        },
        {
            label: this.products[1],
            children: [
                {
                    label: 'Child 2.1'
                },
                {
                    label: 'Child 2.2'
                }
            ]
        },
        {
          label: null,
          children: [
              {
                  label: null
              },
              {
                  label: null
              }
          ]
      }
    ]
}];
}

}

export interface Tree {
  label: string;
  children: Leaf[];
}

export interface Leaf {
  label: string;

}

export interface SubLeaf {
  label: string;
}
