import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions, Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageServiceComponent } from '../common-components/message-service/message-service.component';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private headers: Headers;
  private options: RequestOptions;
  BASE_API_URL = 'http://localhost:53016/';

  constructor(private http: HttpClient , private messageService: MessageServiceComponent) { }

   //  base method
   setUrl(urlPath: string) {
    return this.BASE_API_URL + urlPath;
}


  testSerivice() {
    console.log('test service called');
  this.messageService.showSuccessMessage('aa');
  }

  getAllProducts() {
    const a = 3;
    const b = 2;
    return this.http.get(`${this.setUrl('Test/get')}/${a},${b}`).subscribe(data => {
      console.log(data);
      });


  }



}
