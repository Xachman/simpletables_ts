/* tslint:disable:no-unused-variable */

import { Column } from '../../app/Database/Column';

describe('Column', () => {

  it('Test processType is correct', ()  => {
		
		var column1 = new Column("test_column", "int");
		var column2 = new Column("test_column", "VARCHAR");
	

	
    expect(column1.getType()).toEqual("int");
		
  });

	it('Test processType throw error', () => {
		expect(() => {
			new Column("test_column", 'string')
		}).toThrowError("Type not found");
	});

});
