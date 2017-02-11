import { ATable } from './ATable';
import { Column } from './Column';

export class Table extends ATable {
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
