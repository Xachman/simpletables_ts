import { Column } from "./Column";

export abstract class Table {
	constructor() {
	}

	createTableSql() {
		var sql = "CREATE TABLE IF NO EXISTS "+this.tableName()+" (";

		if(this.autoincrement()) {
			sql+= "id INTEGER PRIMARY KEY AUTOINCREMENT,";
		}
		var columns = this.getColumns();
		for(var i = 0; i < columns.length; i++) {
			var col = columns[i];
			console.log(col);
			sql += col.getName()+" "+col.getType();
			if((i+1) < columns.length) {
				sql+=",";
			}
		}
		
		return sql+")";
	}
	abstract tableName(): string;
	abstract getColumns(): Array<Column>;
	abstract autoincrement(): boolean;
}
