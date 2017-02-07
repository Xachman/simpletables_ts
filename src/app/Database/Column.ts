export class Column {
	type: string;
	name: string;
	private types = ["int", "char", "varchar", "text", "datetime", "time", "date"];

	constructor(name: string, type: string) {
		this.type = this.processType(type);
		this.name = name;
	}
	getName() {
	   return this.name;
	}
	getType() {
		return this.type;	
	}
	getTypes(): Array<string> {
		return this.types;
	}

	private processType(type: string): string {
		for(var i = 0; i < this.getTypes().length; i++) {
			var typeCheck = this.getTypes()[i];
			if(typeCheck.toLowerCase() == type.toLowerCase()) {
				return type.toLowerCase();
			}
		}
		throw new Error("Type not found");
	}
}
