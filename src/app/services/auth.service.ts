import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(usuario: string, password: string): Observable<any> {
    var request = '/api/Manage/Login';
    var url = environment.urlApiCubos + request;
    var user = {
      email: usuario,
      password: password,
    };
    var json = JSON.stringify(user);
    var header = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this._http.post(url, json, { headers: header });
  }

  register(usuario: Usuario) {
    var request = '/api/Manage/RegistroUsuario';
    var url = environment.urlApiCubos + request;

    var json = JSON.stringify(usuario);
    var header = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this._http.post(url, json, { headers: header });
  }

  setToken(token: string): any {
    localStorage.setItem('token', token);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  deleteToken(): any {
    localStorage.removeItem('token');
  }
}
