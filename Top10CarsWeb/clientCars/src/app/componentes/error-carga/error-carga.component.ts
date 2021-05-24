import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-error-carga',
  templateUrl: './error-carga.component.html',
  styleUrls: ['./error-carga.component.scss']
})
export class ErrorCargaComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('ERROR');
  }

}
