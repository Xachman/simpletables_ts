export class Menu {
	private menu = [
		new MenuItem("Create Table","create-table",function() {
			console.log("Create Table")
		})
	]
	constructor() {
		
	}	

	getName(key) {

	}

	getMenuItems(): Array<string> {
		return this.menu;
	}
}

class MenuItem {
	private name: string;
	private htmlClass: string;
	private callback;
	constructor(name: string, htmlClass:string, callback) {
		this.name = name;
		this.htmlClass = htmlClass;
	 	this.callback = callback;	
	}

	getName(): string {
		return this.name;
	}
	getClass(): string {
		return this.htmlClass;
	}

	action() {
		this.callback();
	}
}
