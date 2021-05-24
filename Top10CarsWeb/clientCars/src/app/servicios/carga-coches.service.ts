import { Injectable } from '@angular/core';
import {ICoche} from "../interfaces/i-coche";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CargaCochesService {

  private URL_SERVER_COCHES = 'http://localhost:3000/coches';

  constructor(private http:HttpClient) {

  }
  //Devuelve un observable con todos los coches del servidor
  getCoches(): Observable<ICoche []> {
    return this.http.get<ICoche []>(this.URL_SERVER_COCHES);
  }
  //Devuelve un observable con UN solo coche el cual es seleccionado mediante el ID pasado por parametro
  getCoche(cocheID: number): Observable<ICoche> {
    return this.http.get<ICoche>(this.URL_SERVER_COCHES+"/"+cocheID);
  }
  //Guardamos un coche en el servidor mediante PUT
  guardarCoche(coche: ICoche): Observable<ICoche> {
    return this.http.put<ICoche>(
      this.URL_SERVER_COCHES+"/"+coche.id, coche);
  }
}
