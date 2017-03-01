/* tslint:disable:no-unused-variable */

import { Tables }  from '../../app/Database/Tables';
import { Table }  from '../../app/Database/Table';
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
  it('Test getTablesFromDatabase is correct', ()  => {
		var tables = new Tables(db);
		var tableArray = tables.getTables();

		var table1Col = Array<Column>();
		var table2Col = Array<Column>();
		
	    table1Col.push(new Column("id", "integer"));
	    table1Col.push(new Column("col_1", "text"));
	    table1Col.push(new Column("col_2", "char"));
	    table1Col.push(new Column("col_3", "date"));
	    
	    	
	    table2Col.push(new Column("col_1", "text"));
	    table2Col.push(new Column("col_2", "char"));
	    table2Col.push(new Column("col_3", "date"));
	    
        var testTables = [
                new Table(table1Col, true, "test"),
                new Table(table2Col, false, "test2")
            ];
        
        
		for(var i = 0; i < tableArray.length; i++) {
			var table = tableArray[i];

			console.log(table.tableName());
		}	
        
		expect(tableArray).toEqual(testTables);	
  });
  it('Test getTablesFromDatabase not tables', () => {
		var newDb = new SQLite();
		newDb.open();
		var tables = new Tables(newDb);
	

		expect(0).toEqual(tables.getTables().length);
  })

});
