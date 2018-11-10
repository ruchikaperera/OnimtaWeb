import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-stock-transfer',
  templateUrl: './new-stock-transfer.component.html',
  styleUrls: ['./new-stock-transfer.component.css']
})
export class NewStockTransferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export interface Stock {
  itemName: string;
  supplierCode: string;
  source: string;
  qty: number;
  sourceAfter: number;
  destination: string;
  destinationAfter: number;

}

