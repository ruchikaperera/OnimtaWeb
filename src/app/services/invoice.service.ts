// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Http, RequestOptions, Headers } from '@angular/http';

// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Customer } from '../models/customer.model';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class InvoiceService {

//   private headers: HttpHeaders;
//   private options:RequestOptions;
//   BASE_API_URL='http://localhost:14174/'

//   constructor(private httpClient: HttpClient, private authService: AuthService) {
//     this.headers=authService.getAuthHeaders();
//    }

//   createInvoiceDraft(){
//     return this.httpClient.post(`${this.BASE_API_URL}api/invoice/CreateDraft`,{}, {headers:this.headers});
//   }

//   updateInvoiceDraft(draft){
//     return this.httpClient.put(`${this.BASE_API_URL}api/invoice/UpdateDraft`,draft,{ headers:this.headers });
//   }

//   getInvoiceDraft(id){
//     return this.httpClient.get(`${this.BASE_API_URL}api/invoice/GetDraft/`+ id,{ headers:this.headers });
//   }

//   addInvoiceDraftDetail(lineItem){
//     return this.httpClient.post(`${this.BASE_API_URL}api/invoice/CreateDraftDetail`,lineItem ,{ headers:this.headers });
//   }

//   updateInvoiceDraftDetail(lineItem){
//     return this.httpClient.put(`${this.BASE_API_URL}api/invoice/UpdateDraftDetail`,lineItem ,{ headers:this.headers });
//   }

//   getInvoiceDraftDetails(id){
//     return this.httpClient.get(`${this.BASE_API_URL}api/invoice/GetInvoiceDraftDetails/` + id, { headers:this.headers });
//   }
//   deleteInvProduct(id){
//     return this.httpClient.delete(`${this.BASE_API_URL}api/invoice/DeleteInvoiceDraftDetail/`+ id, { headers:this.headers });
//   }

//   postInvoice(draftId){
//     return this.httpClient.post(`${this.BASE_API_URL}api/invoice/PostInvoice/`+ draftId,{}, { headers:this.headers });
//   }

//   getProduct(id){
//     return this.httpClient.get(`${this.BASE_API_URL}api/item/Get/` + id, { headers:this.headers });
//   }

//   addProduct(prod){
//     return this.httpClient.post(`${this.BASE_API_URL}api/item/Post`,prod, { headers:this.headers });
//   }

//   deleteProduct(id){
//     return this.httpClient.delete(`${this.BASE_API_URL}api/item/Delete/`+ id, { headers:this.headers });
//   }

//   editProduct(id,prod){
//     return this.httpClient.put(`${this.BASE_API_URL}api/item/Put/`+id,prod, { headers:this.headers });
//   }

//   editSingleProduct(id,prod){
//     return this.httpClient.get(`${this.BASE_API_URL}api/invoice/EditInvoiceDraftDetails/` + id, { headers:this.headers });
//   }
// }
