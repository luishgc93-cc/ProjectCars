import { Component, OnInit } from '@angular/core';
import {ICoche} from "../../interfaces/i-coche";
import {ActivatedRoute} from "@angular/router";
import {CargaCochesService} from "../../servicios/carga-coches.service";
import {DomSanitizer, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-detalles-coche',
  templateUrl: './detalles-coche.component.html',
  styleUrls: ['./detalles-coche.component.scss']
})
export class DetallesCocheComponent implements OnInit {

  idCoche: number;

  coche: ICoche;

  imagenSource;

  constructor(private route: ActivatedRoute, private cargaCoche: CargaCochesService, private sanitizer: DomSanitizer, private titleService: Title) { }

  ngOnInit(): void {
    this.idCoche = this.route.snapshot.params['id'];//Nuestro idCoche sera igual al id de la ruta en la que estamos
    this.coche = this.route.snapshot.data['coche'];//Nuestro coche igual que el id
    this.imagenSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.coche.foto);//Pasamos la foto con el sanitizer para poder visualizarla correctamente
    this.titleService.setTitle('Detalles '+ this.coche.nombre);//El titulo de la pagina cambiara dependiendo del nombre del coche que estemos visualizando
  }

  //Metodo que nos sirve para editar un objeto coche
  editarCoche() {
    this.cargaCoche.guardarCoche(this.coche).subscribe( c => console.log('Coche actualizado'))
    console.log(this.coche.vendidos);
  }

}
