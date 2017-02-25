import { Component } from '@angular/core';
import { SQLite } from './Database/SQLite';
import { FileUtil } from './Util/File';
import { Menu } from './Admin/Menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application Title';
	message = "Please add database";
	menu = new Menu();
	constructor() {
		this.menu.addMenuItem(new MenuItem());
	}
	getDatabase() {
		console.log("get the database");
	}
}
