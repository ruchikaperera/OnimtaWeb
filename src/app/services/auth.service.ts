// import { Injectable } from '@angular/core';
// import { Response, RequestOptions } from '@angular/http';
// import { HttpHeaders } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   //private headers: HttpHeaders;

//   constructor() { }

//    getAuthHeaders():HttpHeaders{
//     let headers=new HttpHeaders();
//     var token = localStorage.getItem('at');
//     if(token!=null){
//       token = token.replace(/(^\")|("$)/gi, "");
//       headers= headers.append('Content-Type','application/json');
//       headers= headers.append('Authorization', 'Bearer ' + token);
//       return headers;
//     }
//     else{
//       return null;
//     }

//   }

// }
