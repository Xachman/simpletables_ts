import { Component, Injector } from '@angular/core';
import { Menu } from '../Admin/Menu';
import {SQLite} from '../Database/SQLite';
import {Tables} from '../Database/Tables';
@Component({
  selector: 'create',
  templateUrl: '../../templates/tables.component.html',
})
export class TablesComponent {
	private db: SQLite;
	private tables: Tables;
	
	constructor(private injector: Injector) {
		this.db = this.injector.get('database');
		this.tables = new Tables(this.db);
	}
}
