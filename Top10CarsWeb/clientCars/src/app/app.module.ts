import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DetallesCocheComponent } from './componentes/detalles-coche/detalles-coche.component';
import { ErrorCargaComponent } from './componentes/error-carga/error-carga.component';
import { FiltroCochesPipe } from './pipes/filtro-coches.pipe';
import { InicioItemComponent } from './componentes/inicio-item/inicio-item.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {DetallesCocheService} from "./servicios/detalles-coche.service";
import {FormsModule} from "@angular/forms";
import {InicioResolveService} from "./servicios/inicio-resolve.service";


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DetallesCocheComponent,
    ErrorCargaComponent,
    FiltroCochesPipe,
    InicioItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'dashboard', component: InicioComponent,
          resolve: {
            coches: InicioResolveService
          }
        },
        {path: 'detalles', component: DetallesCocheComponent},
        {path: 'error', component: ErrorCargaComponent},
        {
          path: 'detalles/:id', component: DetallesCocheComponent,
          resolve: {
            coche: DetallesCocheService
          }
        },
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        {path: '**', redirectTo: '/dashboard', pathMatch: 'full'},]
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
