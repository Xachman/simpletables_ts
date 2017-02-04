class Column {
	type: string;
	name: string;
	constructor(type:string , name: string) {
		this.type = type;
		this.name = name;
		console.log(type);
	}
	getName() {
	   return this.name;
	}
	getType() {
		return this.type;	
	}
}
