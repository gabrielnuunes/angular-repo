import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected url: string = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  headers = { 'Authorization': 'Basic MzdBNjI1OUNDMEMxREFFMjk5QTc4NjY0ODlERkYwQkQ6NDk0YzVkMTNmOGVmYWIyN2YxMjdjZWFhMTEzZDNlNDkwMjhhNzE4ODc5MmQwYzk3ZmE0ZGY0MDU1OTY0NGUyYg==',
  'Content-Type': 'application/x-www-form-urlencoded'};

  obterToken(): Observable<Auth>{
    const headersAuth = new HttpHeaders();
    headersAuth.append('Authorization', 'Basic MzdBNjI1OUNDMEMxREFFMjk5QTc4NjY0ODlERkYwQkQ6NDk0YzVkMTNmOGVmYWIyN2YxMjdjZWFhMTEzZDNlNDkwMjhhNzE4ODc5MmQwYzk3ZmE0ZGY0MDU1OTY0NGUyYg==');
    headersAuth.append('Content-Type', 'application/x-www-form-urlencoded');

    const body = {"grant_type":"client_credentials"};

    return this.http.post<Auth>(this.url + "/auth/access_token", body, { headers: this.headers })

  }
}
