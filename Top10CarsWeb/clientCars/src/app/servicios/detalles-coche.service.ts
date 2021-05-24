import { Injectable } from '@angular/core';
import {CargaCochesService} from "./carga-coches.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {ICoche} from "../interfaces/i-coche";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DetallesCocheService {

  constructor(private cargarCoche: CargaCochesService, private router: Router) { }

//Resolve de los detalles de nuestro coche (Nos devuelve solo un coche)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICoche> {
    return this.cargarCoche.getCoche(route.params['id']).pipe(
      catchError(error => {
          this.router.navigate(['/error']);//Si falla
          return of(null);
        }
      )
    )
  }
}
