// import { HttpClient, HttpEvent } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   constructor(private httpClient: HttpClient) {}

//   // baseUrl = 'http://localhost:3000';
//   baseUrl = 'https://ecommerceapplication-backend.onrender.com';

//   post(url: string, body: any): Observable<any> {
//     return this.httpClient.post(`${this.baseUrl}${url}`, body, {
//       withCredentials: true,
//     });
//   }

//   get(url: string): Observable<any> {
//     return this.httpClient.get(`${this.baseUrl}${url}`, {
//       withCredentials: true,
//     });
//   }
// }


// ///////////////////
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   constructor(private httpClient: HttpClient) {}

//   // Uncomment for local development
//   // baseUrl = 'http://localhost:3000'; 
//   baseUrl = 'https://ecommerceapplication-backend.onrender.com';
//   // baseUrl = 'https://ecommerceapplication-bm2n.onrender.com'; // 

//   post(url: string, body: any, options: { withCredentials?: boolean } = {}): Observable<any> {
//     return this.httpClient.post(`${this.baseUrl}${url}`, body, {
//       withCredentials: options.withCredentials,
//     });
//   }

//   get(url: string, options: { withCredentials?: boolean } = {}): Observable<any> {
//     return this.httpClient.get(`${this.baseUrl}${url}`, {
//       withCredentials: options.withCredentials,
//     });
//   }
// }
//


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  baseUrl = 'https://ecommerceapplication-backend.onrender.com';
  // baseUrl = 'http://localhost:3000';

  post(url: string, body: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}${url}`, body, {
      withCredentials: true, // Ensure credentials (cookies) are sent
    });
  }

  get(url: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${url}`, {
      withCredentials: true, // Ensure credentials (cookies) are sent
    });
  }
}


