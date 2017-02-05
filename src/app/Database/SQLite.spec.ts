/* tslint:disable:no-unused-variable */

import { SQLite } from './SQLite';

describe('SQLite', () => {
	var db;
  beforeEach(() => {
		db = new SQLite();
		db.open();
	
  });

  it('Test Create Table', ()  => {
		db.run("CREATE TABLE test (a INT, b TEXT, c DATETIME);");

		var result = db.exec("SELECT name FROM sqlite_master WHERE name='test';");

    expect(result[0].values[0][0]).toEqual("test");
  });

	it("Test Random Column Types", () => {
		db.run("CREATE TABLE test (a LIZ, b MAC, c STAN);");

		var result = db.exec("PRAGMA table_info('test');");
		var test = [];
		var values = result[0].values;
		for(var i = 0; i < values.length; i++) {
			var value = values[i];
			
			test.push(value[2]);
		}


    expect(test).toEqual(["LIZ", "MAC", "STAN"]);
	})

	it('Test Insert Table', () => {
		db.run("CREATE TABLE test (a INT, b TEXT, c DATETIME);");
		var test = [1,"test", 100,1,"test", 100,1,"test", 100];
		db.prepareExecute("INSERT INTO test VALUES (?,?,?),(?,?,?),(?,?,?)", test);

		var result = db.exec("SELECT * FROM test");
		var testResult = [];
		var values = result[0].values;
	console.log(values);	
		for(var i = 0; i < values.length; i++) {
			var value = values[i];
			
			testResult.push(value[2]);
		}
		

		console.log(result[0].values);
		expect(test).toEqual(testResult);
	});

});
