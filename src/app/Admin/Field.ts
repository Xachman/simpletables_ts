import { Column } from "../Database/Column";

export class Fields {
	
	private fieldsData: Array<FieldData>

	constructor(fieldsData: Array<FieldData>) {
		this.fieldsData = fieldsData;
	}
	generateField(column: Column) {
		for(var i = 0; i < this.fieldsData.length; i ++) {
			var field = this.fieldsData[i];
			if(column.getType() == field.type) {
				return field.html_field;
			}
		}

		throw new Error("No field html found");
	}
	
}


interface FieldData {
	type: string;
	html_field: string;
}
