class Entry {
	private mColumnName: string;
	private value: string;
	constructor(columnName: string, value: string) {
		this.mColumnName = columnName;
		this.value = value;
	}
	columnName() {
	   return this.columnName;
	}
	type() {
		return this.type;	
	}
}
