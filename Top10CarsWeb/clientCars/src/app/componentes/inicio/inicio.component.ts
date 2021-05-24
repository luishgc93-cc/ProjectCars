import { Component, OnInit } from '@angular/core';
import {ICoche} from "../../interfaces/i-coche";
import {CargaCochesService} from "../../servicios/carga-coches.service";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  coches: ICoche[];

  top: number;

  constructor(private titleService: Title, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.coches = this.route.snapshot.data['coches'];//Traemos todos los coches
    this.titleService.setTitle('Dashboard');//Ponemos el titulo a la pagina
    this.top = 3;//El numero de coches que deseamos mostrar en el TOP de nuestra pagina
  }

}
