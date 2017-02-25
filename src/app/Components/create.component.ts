import { Component } from '@angular/core';

@Component({
  selector: 'create',
  templateUrl: '../templates/create.component.html',
  styleUrls: ['../assets/css/create.component.css']
})
export class AppComponent {
  title = 'Application Title';
	message = "Please add database";
	menu = new Menu();
	constructor() {
	}
}
