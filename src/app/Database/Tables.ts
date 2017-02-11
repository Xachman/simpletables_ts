import { SQLite } from "./SQLite";
import { Table } from "./Table";

export class Tables {
	private db: SQLite;
	private tables: Array<Table>;
	private ignoreTables = ["sqlite_sequence"];

	constructor(db: SQLite) {
		this.db = db;
	}	

	compileTalbes() {
		this.getTablesFromDatabase();	
	}	
	
	getTablesFromDatabase(): Array<Table> {
		var results = this.db.exec("SELECT name FROM sqlite_master;");
		var tables = Array<Table>();
		
		for(var i = 0; i < results.length; i++) {
			var values = results[i];

		}	
		
		return tables;
	}

	parseColumns(tableNames: Array<string>) {

	}

	
}
