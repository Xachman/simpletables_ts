import { Component } from '@angular/core';
import { SQLite } from './Database/SQLite';
import { FileUtil } from './Util/File';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application Title';
	message = "Please add database";
	constructor() {
	}
	getDatabase() {
		console.log("get the database");
	}
}
