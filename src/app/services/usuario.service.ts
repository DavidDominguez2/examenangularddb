import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private _http: HttpClient, private _auth: AuthService) {}

  getPerfilUsuario(): Observable<any> {
    var header = new HttpHeaders({
      Authorization: 'bearer ' + this._auth.getToken(),
    });
    var request = '/api/Manage/PerfilUsuario';
    var url = environment.urlApiCubos + request;
    return this._http.get(url, { headers: header });
  }

  getComprasUsuario(): Observable<any> {
    var header = new HttpHeaders({
      Authorization: 'bearer ' + this._auth.getToken(),
    });
    var request = '/api/Compra/ComprasUsuario';
    var url = environment.urlApiCubos + request;
    return this._http.get(url, { headers: header });
  }

  postPedido(id: number): Observable<any> {
    var header = new HttpHeaders({
      Authorization: 'bearer ' + this._auth.getToken(),
    });

    var request = '/api/Compra/InsertarPedido/' + id;
    var url = environment.urlApiCubos + request;
    return this._http.post(url, '', { headers: header });
  }
}
