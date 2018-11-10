import { CommonService } from './../../services/common.service';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-company-group-settings',
  templateUrl: './company-group-settings.component.html',
  styleUrls: ['./company-group-settings.component.css']
})
export class CompanyGroupSettingsComponent implements OnInit {

  savedCompanyGroup: Products[] = [];
  productList: string[] = [];
  savedCompanyGroupList: string[] = [];
  tempArray: Products[] = [];


  attributes: Attribute[] = [];
  attributeList: string[] = [];
  savedAttributes: Attribute[] = [];
  savedAttributeList: string[] = [];
  selectedProduct: Products;

  subAttributes: SubAttributes[] = [];
  subAttributeList: string[] = [];
  savedSubAttributeList: string[] = [];
  selectedAttribute: Attribute;

  startindex: number;
  Properties: Products[];



  constructor( private productService: ProductService,
                 private commonServices: CommonService) { }
  items: any[];

  ngOnInit() {
      this.items = [
          {label: 'Stats', icon: 'fa fa-fw fa-bar-chart' , routerLink : 'summery'},
          {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
          {label: 'Documentation', icon: 'fa fa-fw fa-book'},
          {label: 'Support', icon: 'fa fa-fw fa-support'},
          {label: 'Social', icon: 'fa fa-fw fa-twitter'}
      ];
  }
  saveCompanyGroup() {

    this.commonServices.showSuccessMessage('Sucessfully added a company group');
    let tempsavedCompanyGroup = this.savedCompanyGroup;
    this.savedCompanyGroup = [];
    this.startindex = 0;
    this.savedCompanyGroupList = this.productList;

    for (this.startindex = this.productList.length - 1; this.startindex >= 0; this.startindex--) {
      const tempProduct: Products = { id: this.startindex, name: this.savedCompanyGroupList[this.startindex] };
      this.savedCompanyGroup.push(tempProduct);
    }

    for (this.startindex = tempsavedCompanyGroup.length - 1; this.startindex >= 0; this.startindex--) {
      this.savedCompanyGroup.push(tempsavedCompanyGroup[this.startindex]);
      this.savedCompanyGroupList.push(tempsavedCompanyGroup[this.startindex].name);
    }
    console.log('saved products', this.savedCompanyGroup);
    tempsavedCompanyGroup = [];
    this.productList = [];
  }


  saveAttributes() {

    const tempAttributes = this.attributeList;
    const tempsavedAttributes = this.savedAttributes;
    console.log(this.selectedProduct);
    console.log('attribute list chips', this, this.attributeList);
    this.savedAttributes = [];

    this.startindex = 0;
    this.attributeList = [];
    for (this.startindex = 0; this.startindex <= tempAttributes.length - 1; this.startindex++) {

      const tempAttribute: Attribute = { id: this.startindex, name: tempAttributes[this.startindex] };
      const tempAttributeName = tempAttributes[this.startindex].replace(/^/, this.selectedProduct.name + '-');
      this.savedAttributeList.push(tempAttributeName); // total list
    }

    console.log('attribute list for drop down', this.savedAttributes);
    for (this.startindex = 0; this.startindex <= this.savedAttributeList.length - 1; this.startindex++) {
      const tempAttribute: Attribute = { id: this.startindex, name: this.savedAttributeList[this.startindex] };
      this.savedAttributes.push(tempAttribute);
    }

    this.attributeList = [];

  }

  saveSubAttributes() {


    const tempSubAttributes = this.subAttributeList; // chip list
    console.log(this.selectedProduct);
    console.log('attribute list chips', this, this.attributeList);
    this.startindex = 0;
    this.subAttributeList = [];
    for (this.startindex = 0; this.startindex <= tempSubAttributes.length - 1; this.startindex++) {

      const tempSubAttributeName = tempSubAttributes[this.startindex].replace(/^/, this.selectedAttribute.name + '-');
      this.subAttributeList.push(tempSubAttributeName);
    }

    for (this.startindex = 0; this.startindex <= this.subAttributeList.length - 1; this.startindex++) {
      this.savedSubAttributeList.push(this.subAttributeList[this.startindex]);
    }
    this.subAttributeList = [];
  }

  getProducts() {
    console.log('web api method called');
    this.productService.getAllProducts();
  }


  // showSuccessMessage( messagedetail: string) {
  //   console.log('show success method called');
  //       this.messageService.add({severity: 'success', summary: 'Success', detail: messagedetail});
  //   }
  //   showErrorMessage( messagedetail: string) {
  //     this.messageService.add({severity: 'error', summary: 'Error', detail: messagedetail});
  //   }
  //   showWarnningMessage( messagedetail: string) {
  //     this.messageService.add({severity: 'warn', summary: 'Warnning', detail: messagedetail});
  //   }

  //   showInfoMessage( messagedetail: string) {
  //     this.messageService.add({severity: 'info', summary: 'Info', detail: messagedetail});
  //   }
}

export interface Products {
  id: number;
  name: string;
}

export interface Attribute {
  id: number;
  name: string;
}
export interface SubAttributes {
  id: number;
  name: string;
}




