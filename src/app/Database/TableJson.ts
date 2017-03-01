import { Column } from './Column';
import { ATable } from './ATable';
class TableJson extends ATable {
	columns: Array<Column>;
	json: string;
	data: TableData;
	constructor(json: string) {
		super();
		this.json = json;
		this.data = JSON.parse(json);
		this.columns = this.parseColumns();
	}
	tableName() {
		return this.data.table_name;
	}
	getColumns() {
		return this.columns;
	}

	autoincrement() {
		return this.data.autoincrement;
	}

	parseColumns() {
		var columnsData = this.data.columns;
		var columns = [];
		for(var i = 0; i < columnsData.length; i++) {
			columns.push(new Column(columnsData[i].type, columnsData[i].name));
		}	
		return columns;
	}

}


interface TableData {
	autoincrement: boolean;
	columns: Array<{name:string, type:string}>;
	table_name: string;
}
