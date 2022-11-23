import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloDatos } from '../modelos/datos.modelo';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})

export class SeguridadService {

  url = 'http://localhost:3000';
  datosUsuario = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());
  constructor(private http: HttpClient) {

  }

  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
    let url = `${this.url}/identificarPersona`;

    let obj = {usuario:usuario, clave:clave};

    return this.http.post<ModeloIdentificar>(url, obj, {headers: new HttpHeaders({'Content-Type':'application/json'})});
  }
}
