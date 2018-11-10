import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
})
export class AppHomeComponent implements OnInit {

  sales: any;
  data: any;
  data1: any;
  data3: any;
  list: string[] = [];
  amount: number[] = [];





  constructor() {
      this.list = ['A', 'B', 'C', 'D', 'E' , 'G' ];
      this.amount = [40, 56, 90, 200, 100];
      this.data = {
          labels: [this.list[0], this.list[1], this.list[2], this.list[3], this.list[4] , this.list[5]],
          datasets: [
              {
                  data: [this.amount[0], this.amount[1], this.amount[2], this.amount[3], this.amount[4] , this.list[5] , this.list[6] ],
                  backgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56',
                      '#FFCE66',
                      '#FFCE16'
                  ],
                  hoverBackgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56'
                  ]
              }]
          };


          this.data1 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Ladies',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Gents',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
          };

          this.data3 = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            };
        }




  ngOnInit() {
  }

}
