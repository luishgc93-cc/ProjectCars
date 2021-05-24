import { Pipe, PipeTransform } from '@angular/core';
import {ICoche} from "../interfaces/i-coche";

@Pipe({
  name: 'filtroCoches'
})
export class FiltroCochesPipe implements PipeTransform {

  /*
  Pipe mediante el cual retornamos los coches ordenador comparando estos entre
  si por el numero de ventas de cada uno y cortamos el array devuelto
  del numero 0 al parametro TOP que nos llega por parametro, en este caso sera 3.
   */
  transform(coches: ICoche[], top: number): ICoche[] {
    return coches.sort((num1, num2) => num2.vendidos - num1.vendidos).slice(0, top);
  }
}
