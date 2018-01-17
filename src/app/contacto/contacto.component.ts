import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'contacto',
    templateUrl: 'template/contacto.html',
})

export class ContactoComponent implements OnInit{
    ngOnInit(): void {
        console.log("soy contacto");
        
    }
}


