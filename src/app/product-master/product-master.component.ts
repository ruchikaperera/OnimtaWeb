import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {



  constructor(private productService: ProductService,
    private messageService: MessageService) { }
  items: any[];

  ngOnInit() {
    this.items = [
      { label: 'Configurations', icon: 'fa fa-fw fa-bar-chart', routerLink: 'settings' },
      { label: 'Summery', icon: 'fa fa-fw fa-calendar', routerLink: 'settings' },
      { label: 'Documentation', icon: 'fa fa-fw fa-book' },
      { label: 'Support', icon: 'fa fa-fw fa-support' },
      { label: 'Social', icon: 'fa fa-fw fa-twitter' }
    ];
  }

  onTabChange(event) {
    console.log('tab changed');
    console.log(event);

    this.messageService.add({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
  }
}
