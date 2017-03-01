import { Component, Injector } from '@angular/core';
import { Menu } from '../Admin/Menu';
import {SQLite} from '../Database/SQLite';
import {Tables} from '../Database/Tables';
import {Column} from '../Database/Column';

@Component({
  selector: 'create',
  templateUrl: '../../templates/create.component.html',
  styleUrls: ['../../assets/css/create.component.css']
})
export class CreateTableComponent {
	private db: SQLite;
	private tables: Tables;
	private columnTypes: Array<string>;
		
	constructor(private injector: Injector) {
		this.db = this.injector.get('database');
		var column = new Column("test","int");
		this.columnTypes = column.getTypes();
		console.log(this.columnTypes);
		this.tables = new Tables(this.db);
	}
}
