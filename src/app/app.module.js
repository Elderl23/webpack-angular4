var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Se carga router-outlet.
import { AppComponent } from './app.component';
// primera ruta que se carga
import { routing, appRoutingProviders } from './app.routing';
// Se carga el modulo incial par la primera pantalla
import { DashboardModule } from "./dashboard/dash.module";
import { ContactoModule } from "./contacto/contacto.module";
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map