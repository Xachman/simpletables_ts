import { Component, NgModule } from '@angular/core';
import { SQLite } from './Database/SQLite';
import { FileUtil } from './Util/File';
import {BrowserModule} from '@angular/platform-browser';
import { Menu } from './Admin/Menu';
import { MenuItem } from './Admin/Menu';
import { DynamicComponent } from './Components/dynamic.component';
import {CreateTableComponent} from './Components/createTable.component';
import {TablesComponent} from './Components/tables.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	title = 'Application Title';
  	componentData = null;
	db: SQLite;
	message = "Please add database";
	menu = new Menu();
	constructor() {
		this.db = new SQLite();
		this.db.open();
		var obj = this;
		this.menu.addMenuItem(
			new MenuItem("Create Table","create-table",function() {
				obj.componentData = { 
					component: CreateTableComponent,
					inputs: {
						database: obj.db
					}
				}
			})
		);
		this.menu.addMenuItem(
			new MenuItem("Tables","tables",function() {
				obj.componentData = { 
					component: TablesComponent,
					inputs: {
						database: obj.db
					}
				}
			})
		);
	}
	getDatabase() {
		console.log("get the database");
	}
}