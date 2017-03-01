export class Menu {
	private menu = [
	]
	constructor() {
		
	}	

	addMenuItem(menuItem: MenuItem) {
		this.menu.push(menuItem);
	}	
	getName(key) {

	}

	getMenuItems(): Array<MenuItem> {
		return this.menu;
	}
}

export class MenuItem {
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
