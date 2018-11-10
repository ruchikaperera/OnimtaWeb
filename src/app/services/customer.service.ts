// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// import { RequestOptions } from '@angular/http';

// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Customer } from '../models/customer.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CustomerService {

//   private headers: Headers;
//   private options:RequestOptions;
//   BASE_API_URL='http://localhost:14174/'

//   constructor(private httpClient: HttpClient) { }

//   getAllCustomers(){
//     return this.httpClient.get(`${this.BASE_API_URL}api/customer`);
//   }

//   getProduct(id){
//     return this.httpClient.get(`${this.BASE_API_URL}api/item/Get/` + id);
//   }

//   addProduct(prod){
//     return this.httpClient.post(`${this.BASE_API_URL}api/item/Post`,prod);
//   }

//   deleteProduct(id){
//     return this.httpClient.delete(`${this.BASE_API_URL}api/item/Delete/`+ id);
//   }

//   editProduct(id,prod){
//     return this.httpClient.put(`${this.BASE_API_URL}api/item/Put/`+id,prod);
//   }
// }
