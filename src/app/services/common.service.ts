import { Injectable } from '@angular/core';
import { MessageServiceComponent } from '../common-components/message-service/message-service.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private messageService: MessageServiceComponent) { }

  showSuccessMessage(messagedetail: string) {
    this.messageService.showSuccessMessage(messagedetail);
  }

  showErrorMessage(messagedetail: string) {
    this.messageService.showErrorMessage(messagedetail);

  }
  showWarnningMessage(messagedetail: string) {
    this.messageService.showWarnningMessage(messagedetail);

  }

  showInfoMessage(messagedetail: string) {
    this.messageService.showInfoMessage(messagedetail);

  }

  showConfirmMessage(messagedetail: string) {
    this.messageService.showConfirm(messagedetail);

  }
}
