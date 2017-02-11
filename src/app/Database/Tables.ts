import { SQLite } from "./SQLite";
import { Table } from "./Table";

export class Tables {
	private db: SQLite;
	private tables: Array<Table>

	constructor(db: SQLite) {
		this.db = db;
	}	

	compileTalbes() {
		
	}	
	
	getTablesFromDatabase(): Array<Table> {
		var result = this.db.exec("SELECT name FROM sqlite_master;");
		var tables = Array<Table>();
		return tables;
		
	}
}
