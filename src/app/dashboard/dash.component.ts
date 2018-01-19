import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: "my-dashboard",
  templateUrl: "template/dashboard.component.html"
})
export class DashboardComponent implements OnInit {

  constructor(protected router: Router) {}

  ngOnInit(): void {
    console.log("soy dash prueba 2");

    // this.router.navigate(["./contacto"]);
  }
}


