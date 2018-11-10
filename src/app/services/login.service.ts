// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';

// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { LoginInfo } from '../models/login-info.model';
// import { UserRegister } from '../models/user-register.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   private headers: Headers;
//   private options:RequestOptions;
//   BASE_API_URL='http://localhost:14174/'

//   constructor(private http:Http) {
//     this.headers = new Headers();
//    }

//   login(loginData : LoginInfo ){

//     let body = new URLSearchParams();
//     body.append('grant_type', 'password');
//     body.append('username', loginData.username );
//     body.append('password', loginData.password );

//     this.headers.append('Content-Type', 'application/x-www-form-urlencoded');

//     return this.http
//     .post(`${this.BASE_API_URL}token`,body.toString(), {headers : this.headers});
//   }

//   register(registerData : UserRegister ){
//     return this.http
//     .post(`${this.BASE_API_URL}api/Account/Register`,registerData, {headers : this.headers});
//   }
// }
