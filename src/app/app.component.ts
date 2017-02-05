import { Component } from '@angular/core';
import { SQLite } from './Database/SQLite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application Title';
	message = "Please add database";
	constructor() {
		this.getDatabase();
		var db = new SQLite();
		db.open();
		try {
			db.run("CREATE Table Test (a INT, b CHAR);");
			db.prepareExecute("INSERT INTO Test VALUES (?,?)", [1, "test"]);
			db.prepareExecute("INSERT INTO Test VALUES (?,?)", [12, 1]);
			var stmt = db.prepare("SELECT * FROM Test WHERE a=$test");
			stmt.bind({$test:12});
			while(stmt.step()) {
				var row = stmt.getAsObject();
				console.log(row);
			}
		} catch(e) {
			console.log(e);
		}
	}
	getDatabase() {
		console.log("get the database");
	}
}
