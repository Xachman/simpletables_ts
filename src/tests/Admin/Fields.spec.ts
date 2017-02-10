/* tslint:disable:no-unused-variable */

import { Fields }  from '../../app/Admin/Fields';
import { Column }  from '../../app/Database/Column';

describe('Fields', () => {

  it('Test generateField is correct', (done)  => {


		function loadFunc() {
			var file = JSON.parse(this.responseText);
			var fields = new Fields(file);
			var html = fields.generateField(new Column("test", "int"));
    	expect(html).toEqual(file[0].html_field);
			done();
		}

		var request = new XMLHttpRequest();
		request.onload = loadFunc;
		request.open("get", "/assets/test-mocks/fields.json", true);
		request.send();
		

		
  });

	it('Test genreateField throw error', (done) => {

		function loadFunc() {

			var file = JSON.parse(this.responseText);
			var fields = new Fields(file);
			expect(() => {
				fields.generateField(new Column("test", "text"));
			}).toThrowError("No field html found");
				done();
		}

		var request = new XMLHttpRequest();
		request.onload = loadFunc;
		request.open("get", "/assets/test-mocks/fields.json", true);
		request.send();


	});

});
