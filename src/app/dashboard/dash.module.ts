// Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Importaciones routing app
import { DashRoutingModule }     from './dash-routing.module';

// Component
import { DashboardComponent } from './dash.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DashRoutingModule,
  ],
  declarations: [//Componentes
    DashboardComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})



export class DashboardModule { }
