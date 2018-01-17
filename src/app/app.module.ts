import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Se carga router-outlet.
import { AppComponent } from './app.component';

// primera ruta que se carga
import {routing, appRoutingProviders} from './app.routing';

// Se carga el modulo incial par la primera pantalla
import { DashboardModule } from "./dashboard/dash.module";


import { ContactoModule } from "./contacto/contacto.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    routing,
    DashboardModule,
    ContactoModule
  ],
  exports: [],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
