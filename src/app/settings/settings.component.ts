import { MessageServiceComponent } from './../common-components/message-service/message-service.component';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProgressBar } from 'primeng/progressbar';
import { ProgressBarComponent } from '../common-components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  attributeItems: string[] = [];
  attributeName: string;
  propertyName: string;
  list: List[] = [];
  index: number;
  selectedList: List;
  selectedPropertyId: number;
  isEditButtonVisible: boolean;
  isAddButtonVisible: boolean;
  lastIndex: number;
  startIndex: number;
  lastChip: string;
  isDuplicatedchip: boolean;
  isAddButtonDisable: boolean;


  Properties: Property[] = [];
  constructor(private messageService: MessageService,
    private progressBar: ProgressBarComponent
  ) {
  }

  ngOnInit() {
    this.isEditButtonVisible = false;
    this.isAddButtonVisible = true;
    this.isAddButtonDisable = true;

    this.index = 0;
    this.list = [
      { id: 1, attribute: 'length', prop1: 'y', prop2: 'z', prop3: 'n', prop4: null, prop5: null }
    ];
  }

  attributeOnClick(id: number) {
    this.isEditButtonVisible = true;
    this.isAddButtonVisible = false;

    this.selectedPropertyId = id;
    this.selectedList = this.list.find(m => m.id === id);
    this.attributeName = this.selectedList.attribute;

    if (this.selectedList.prop1.length > 0) {
      this.attributeItems[0] = this.selectedList.prop1;

    }
    if (this.selectedList.prop2) {
      this.attributeItems[1] = this.selectedList.prop2;

    }
    if (this.selectedList.prop3) {
      this.attributeItems[2] = this.selectedList.prop3;

    }
    if (this.selectedList.prop4) {
      this.attributeItems[3] = this.selectedList.prop4;

    }
    if (this.selectedList.prop5) {
      this.attributeItems[4] = this.selectedList.prop5;

    }
  }



  editAttribute() {

    const selectedIndex = this.list.findIndex(m => m.id === this.selectedPropertyId);

    this.list[selectedIndex] = {
      id: this.selectedPropertyId,
      attribute: this.attributeName,

      prop1: this.attributeItems[0],
      prop2: this.attributeItems[1],
      prop3: this.attributeItems[2],
      prop4: this.attributeItems[3],
      prop5: this.attributeItems[4],

    };
    this.attributeItems = [];
    this.attributeName = null;
    this.isAddButtonVisible = true;
    this.isEditButtonVisible = false;
  }


  addButtonOnChange() {
  }

  startProgressbar() {
    this.progressBar.startprogressBar();
    console.log('satrded');
  }

  stopprogressBar() {
    this.progressBar.stopProgressbar();
  }

  onChipsAdded() {


    if ((this.attributeName) && (this.attributeItems.length > 0)) {
      this.isAddButtonDisable = false;
    }
    this.isDuplicatedchip = true;
    let index = 0;
    if (this.attributeItems.length > 2) {
      this.lastIndex = this.attributeItems.length - 2;
      this.lastChip = this.attributeItems[this.attributeItems.length - 1];

      for (index = 0; index <= this.lastIndex; index++) {

        console.log('chips items', this.attributeItems[index]);

        if (this.lastChip === this.attributeItems[index]) {
          this.isDuplicatedchip = true;
        } else {
          this.isDuplicatedchip = false;
        }
      }
    } else if (this.addAttribute.length === 2) {

      this.lastChip = this.attributeItems[1];
      if (this.attributeItems[0] === this.lastChip) {
        this.isDuplicatedchip = true;
      } else {
        this.isDuplicatedchip = false;
      }

    } else {
      this.lastChip = this.attributeItems[0];
      this.isDuplicatedchip = false;
    }

    console.log('Last chip', this.lastChip);
    console.log('is Duplicated chip', this.isDuplicatedchip);



  }

  message() {
    // this.messageService.showSuccessMessage('Attribute Added');
    // this.messageService.showErrorMessage('Error message');

  }
  addAttribute() {

    this.index++;

    this.list[this.index] = {
      id: this.list.length + 1,
      attribute: this.attributeName,

      prop1: this.attributeItems[0],
      prop2: this.attributeItems[1],
      prop3: this.attributeItems[2],
      prop4: this.attributeItems[3],
      prop5: this.attributeItems[4],

    };

    console.log(this.list);
    this.attributeItems = [];
    this.attributeName = null;
  }

  addProperty() {

    const index = this.Properties.length;
    this.Properties[index] = {
      id: this.Properties.length + 1,
      name: this.propertyName
    };
  }
}

export interface Property {
  id: number;
  name: string;
}

export interface List {

  id: number;
  attribute: string;
  prop1: string;
  prop2: string;
  prop3: string;
  prop4: string;
  prop5: string;
}
