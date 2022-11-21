import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CuboService {
  constructor(private _http: HttpClient) {}

  getAllMarcas(): Observable<any> {
    var request = '/api/cubos/marcas';
    var url = environment.urlApiCubos + request;

    return this._http.get(url);
  }

  getAllCubos(): Observable<any> {
    var request = '/api/cubos/';
    var url = environment.urlApiCubos + request;

    return this._http.get(url);
  }

  getCubosMarca(marca: string): Observable<any> {
    var request = '/api/Cubos/CubosMarca/' + marca;
    var url = environment.urlApiCubos + request;

    return this._http.get(url);
  }

  getCuboById(id: number): Observable<any> {
    var request = '/api/Cubos/' + id;
    var url = environment.urlApiCubos + request;
    return this._http.get(url);
  }

  getComentariosByIdCubo(id: number): Observable<any> {
    var request = '/api/ComentariosCubo/GetComentariosCubo/' + id;
    var url = environment.urlApiCubos + request;
    return this._http.get(url);
  }
}
