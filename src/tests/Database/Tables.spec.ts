/* tslint:disable:no-unused-variable */

import { Tables }  from '../../app/Database/Tables';
import { Column }  from '../../app/Database/Column';
import { SQLite }  from '../../app/Database/SQLite';

describe('Tables', () => {
	
  var db;
  beforeEach(() => {
		db = new SQLite();
		db.open();
		db.exec("CREATE TABLE test (id INTEGER PRIMARY KEY AUTOINCREMENT, col_1 TEXT, col_2 CHAR, col_3 DATE)");	
		db.exec("CREATE TABLE test2 ( col_1 TEXT, col_2 CHAR, col_3 DATE)");	
  });

	afterEach(() => {
		var results = db.exec("SELECT name FROM sqlite_master;");

		for(var i = 0; i < results.length; i++) {
			console.log(results[i].values);
		}
	});
  it('Test generateField is correct', ()  => {
			
  });

	it('Test genreateField throw error', () => {


	});

});
