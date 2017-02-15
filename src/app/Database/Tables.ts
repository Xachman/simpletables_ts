import { SQLite } from "./SQLite";
import { Table } from "./Table";
import { Column } from "./Column";

export class Tables {
	private db: SQLite;
	private tables: Array<Table>;
	private ignoreTables = ["sqlite_sequence"];

	constructor(db: SQLite) {
		this.db = db;
		this.tables = this.getTablesFromDatabase();
	}	

	compileTalbes() {
		this.getTablesFromDatabase();	
	}	
	
	getTablesFromDatabase(): Array<Table> {
		var results = this.db.exec("SELECT name FROM sqlite_master;");
		var tables = Array<Table>();
	
		console.log(results[0].values[0]);	
		for(var i = 0; i < results[0].values.length; i++) {
			var tableName = results[0].values[i];
			if(!this.isIgnore(tableName)) {
				tables.push(this.assembleTable(tableName));
			}
		}	
		
		return tables;
	}
	getTables() {
		return this.tables;
	}
	private assembleTable(tableName:string): Table {
		var results = this.db.exec("PRAGMA table_info('"+tableName+"');");
		var columns = Array<Column>();
		for(var i = 0; i < results[0].values.length; i++) {
			var values = results[0].values[i];
			var columnName = results[0].values[i][1];
			var columnType = results[0].values[i][2];
			columns.push(new Column(columnName, columnType));
		}
		return new Table(columns, true, tableName);
	}
	private isIgnore(tableName: string) {
		for(var i = 0; i < this.ignoreTables.length; i++) {
			if(tableName == this.ignoreTables[i]) {
				return true;
			}
		}
		return false;
	}
	parseColumns(tableNames: Array<string>) {

	}	
}


