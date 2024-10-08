// ApiService - Service for handling API requests to the backend
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This service is available throughout the application
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  // Base URL for the API. Update this URL based on your environment (local or production).
  baseUrl = 'https://ecommerceapplication-backend.onrender.com'; 
  // baseUrl = 'http://localhost:3000'; // Uncomment for local development

  // Method to send POST requests to the backend
  post(url: string, body: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}${url}`, body, {
      withCredentials: true, // Ensure credentials (cookies) are sent with the request
    });
  }

  // Method to send GET requests to the backend
  get(url: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${url}`, {
      withCredentials: true, // Ensure credentials (cookies) are sent with the request
    });
  }
}
