import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'template/dashboard.component.html',
})

export class DashboardComponent implements OnInit{
    
    ngOnInit(): void {
        console.log("soy dash prueba 2");
        
    }
}


