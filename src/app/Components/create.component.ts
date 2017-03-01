import { Component, Injector } from '@angular/core';
import { Menu } from '../Admin/Menu';
import {SQLite} from '../Database/SQLite';
import {Tables} from '../Database/Tables';
@Component({
  selector: 'create',
  templateUrl: '../../templates/create.component.html',
  styleUrls: ['../../assets/css/create.component.css']
})
export class CreateComponent {
	private db: SQLite;
	private tables: Tables;
	
	constructor(private injector: Injector) {
		this.db = this.injector.get('database');
		console.log(this.db);
		this.tables = new Tables(this.db);
	}
}
