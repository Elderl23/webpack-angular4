import { Component } from '@angular/core';
import { GLOBAL } from './services/global';

@Component({
	selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public title = 'Productos Angular';
	public header_color: string;

	constructor() {
		this.header_color = GLOBAL.header_color;
	}
}
