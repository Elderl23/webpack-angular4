// Importaciones generales
import { NgModule }      from '@angular/core';
import { RouterModule, Routes}   from '@angular/router';


// Component
import { ContactoComponent } from "./contacto.component";


const DashRoutes: Routes = [
  {
    path: "contacto",
    component: ContactoComponent //Clase del comonente
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(DashRoutes)
  ],
  exports: [
    RouterModule
  ]
})



export class ContactoRouting { }