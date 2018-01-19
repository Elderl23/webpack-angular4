// Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Importaciones routing app
import { ContactoRouting } from "./contacto-routing.module";

// Component
import { ContactoComponent } from "./contacto.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ContactoRouting,
  ],
  declarations: [//Componentes
    ContactoComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})



export class ContactoModule { }
