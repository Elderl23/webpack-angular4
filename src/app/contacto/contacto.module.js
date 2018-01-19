var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Importaciones generales
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// Importaciones routing app
import { ContactoRouting } from "./contacto-routing.module";
// Component
import { ContactoComponent } from "./contacto.component";
let ContactoModule = class ContactoModule {
};
ContactoModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            FormsModule,
            ContactoRouting,
        ],
        declarations: [
            ContactoComponent,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], ContactoModule);
export { ContactoModule };
//# sourceMappingURL=contacto.module.js.map