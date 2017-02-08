/* tslint:disable:no-unused-variable */

import { Fields }  from '../../app/Admin/Field';
import { Column }  from '../../app/Database/Column';

describe('Fields', () => {

  it('Test generateField is correct', (done)  => {


		function levelRequestListener () {
			var file = JSON.parse(this.responseText);
			console.log(file);
			var fields = new Fields(file);
			var html = fields.generateField(new Column("test", "int"));
    	expect(html).toEqual(file[0].html_field);
			done();
		}

		var request = new XMLHttpRequest();
		request.onload = levelRequestListener;
		request.open("get", "/assets/defaults/fields.json", true);
		request.send();
		

		
  });

	it('Test genreateField throw error', () => {
		// expect(() => {
		// 	new Fields([{}])
		// }).toThrowError("Type not found");
	});

});
