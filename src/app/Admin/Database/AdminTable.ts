import { Table } from '../../Database/Table';
import { Column } from '../../Database/Column';

export class AdminTable extends Table {
	private mColumns: Array<Column>;
	private mAutoincrement: boolean;
	private mTableName: string;
	constructor(columns: Array<Column>, autoincrement: boolean, tableName: string) {
		super();
		this.mColumns = columns;
		this.mAutoincrement = autoincrement;
		this.mTableName = tableName;
	}

	getColumns() : Array<Column> {
		return this.mColumns;
	}

	autoincrement(): boolean {
	 return this.mAutoincrement;	
	}

	tableName(): string {
		return this.mTableName;
	}

}
