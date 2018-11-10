import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-message-service',
  templateUrl: './message-service.component.html',
  styleUrls: ['./message-service.component.css']
})
export class MessageServiceComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.showErrorMessage('msg service component');
  }

  showSuccessMessage(messagedetail: string) {
    console.log('show success method called');
    this.messageService.add({ severity: 'success', summary: 'Success', detail: messagedetail });
  }

  showErrorMessage(messagedetail: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: messagedetail });
  }
  showWarnningMessage(messagedetail: string) {
    this.messageService.add({ severity: 'warn', summary: 'Warnning', detail: messagedetail });
  }

  showInfoMessage(messagedetail: string) {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: messagedetail });
  }

  showConfirm(messagedetail: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: messagedetail });
  }


}
