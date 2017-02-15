var sqljs = require('sql.js');


export class SQLite {
	private db: any;

	constructor() {

	}

	open(file = "") {
		this.db = new sqljs.Database();
	}

	exec(sql:string): Array<Result> {
		return this.db.exec(sql);
	}
	run(sql:string) {
		this.db.run(sql);
	}
	prepare(sql: string): SQLiteStmt	{
		return new SQLiteStmt(this.db.prepare(sql));
	}	
	prepareExecute(sql: string, items: Array<any>) {
		this.db.run(sql,items)
	}
	export() : Uint8Array {
		return this.db.export();
	}	
	
}


export class SQLiteStmt {
	private stmt: any;
	constructor(stmt: any) {
		this.stmt = stmt;
	}

	bind(jsObject: any) {
		this.stmt.bind(jsObject);
	}

	getAsObject(): any {
		return this.stmt.getAsObject();
	}

	step(): any {
		return this.stmt.step();
	}
}


interface Result {
	columns: Array<string>;
	values: Array<string>
}
