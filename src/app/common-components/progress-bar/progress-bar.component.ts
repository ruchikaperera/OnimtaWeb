import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  progressbar: boolean;
  ngOnInit() {
    this.progressbar = false;
    this.startprogressBar();
    this.stopProgressbar();
  }

  startprogressBar() {
   this.progressbar = true;
   console.log('started', this.progressbar);
  }

  stopProgressbar() {
    this.progressbar = false;
  }

}
