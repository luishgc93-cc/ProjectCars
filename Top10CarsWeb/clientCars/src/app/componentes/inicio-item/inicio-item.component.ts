import {Component, Input, OnInit} from '@angular/core';
import {ICoche} from "../../interfaces/i-coche";
import {CargaCochesService} from "../../servicios/carga-coches.service";
import {DomSanitizer, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-inicio-item',
  templateUrl: './inicio-item.component.html',
  styleUrls: ['./inicio-item.component.scss']
})
export class InicioItemComponent implements OnInit {

  @Input() coche: ICoche;

  imagenSource;

  constructor(private titleService: Title, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.imagenSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.coche.foto);//Hacemos el sanitizer a la imagen para poder visualizarla
    this.titleService.setTitle('Dashboard');//Ponemos el titulo a la pagina
  }
}
