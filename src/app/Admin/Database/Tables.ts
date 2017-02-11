import { SQLite } from "../../Database/SQLite";
import { AdminTable } from "./AdminTable";
class Tables {
	private db: SQLite;
	private tables: Array<AdminTable>

	constructor(db: SQLite) {
		this.db = db;
	}	

	compileTalbes() {
		
	}	
	
	getTablesFromDatabase(): Array<AdminTable> {
		var result = db.exec("SELECT name FROM sqlite_master;");
		
	}
}
