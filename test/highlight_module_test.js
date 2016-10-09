/**
 * Basic tests - making sure that public methods are in place and do what they supposed to do 
 */

import {HighLightModule} from "../src/modules/highlight_module.js";


describe('HighLightModule', function () {
	it('should be defined"', function () {
		expect(HighLightModule).toBeDefined();
	});


	it('setFormat() should be defined"', function () {
		expect(HighLightModule.setFormat).toBeDefined();
	});


	it('highlight() should be defined"', function () {
		expect(HighLightModule.highlight).toBeDefined();
	});


	it('highlight() should highlight XML"', function () {
		HighLightModule.setFormat('xml');

		var input = '<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n\r\n<advertiser>\r\n    <id>1<\/id>\r\n<\/advertiser>';

		var output = HighLightModule.highlight(input);

		var expectedXMLOutput = '<span class=\"token prolog\" >&lt;?xml version=\"1.0\" encoding=\"UTF-8\" ?><\/span>\r\n\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;<\/span>advertiser<\/span><span class=\"token punctuation\" >><\/span><\/span>\r\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;<\/span>id<\/span><span class=\"token punctuation\" >><\/span><\/span>1<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;\/<\/span>id<\/span><span class=\"token punctuation\" >><\/span><\/span>\r\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;\/<\/span>advertiser<\/span><span class=\"token punctuation\" >><\/span><\/span>';

		expect(output).toEqual(expectedXMLOutput);
	});


	it('highlight() should highlight XML empty object"', function () {
		HighLightModule.setFormat('xml');

		var input = '<?xml version=\"1.0\" encoding=\"UTF-8\" ?><\/advertiser>';

		var output = HighLightModule.highlight(input);

		var expectedXMLOutput = '<span class="token prolog" >&lt;?xml version="1.0" encoding="UTF-8" ?></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>advertiser</span><span class="token punctuation" >></span></span>';

		expect(output).toEqual(expectedXMLOutput);
	});



	it('highlight() should highlight XML empty string"', function () {
		HighLightModule.setFormat('xml');

		var input = '';

		var output = HighLightModule.highlight(input);

		var expectedXMLOutput = '';

		expect(output).toEqual(expectedXMLOutput);
	});


// ------------------------------------------- JSON ----------------------------

	it('highlight() should highlight JSON"', function () {
		HighLightModule.setFormat('json');

		var obj = [
			{
				"id": 1
			}
		];

		var input = JSON.stringify(obj);

		var output = HighLightModule.highlight(input);

		var expectedXMLOutput = '<span class="token punctuation" >[</span><span class="token punctuation" >{</span><span class="token string" >"id"</span><span class="token punctuation" >:</span><span class="token number" >1</span><span class="token punctuation" >}</span><span class="token punctuation" >]</span>';


		expect(output).toEqual(expectedXMLOutput);
	});


	it('highlight() should highlight JSON empty array"', function () {
		HighLightModule.setFormat('json');

		var obj = [];

		var input = JSON.stringify(obj);

		var output = HighLightModule.highlight(input);

		var expectedXMLOutput = '<span class="token punctuation" >[</span><span class="token punctuation" >]</span>';


		expect(output).toEqual(expectedXMLOutput);
	});


	it('highlight() should highlight JSON empty object"', function () {
		HighLightModule.setFormat('json');

		var obj = {};

		var input = JSON.stringify(obj);

		var output = HighLightModule.highlight(input);

		var expectedXMLOutput = '<span class="token punctuation" >{</span><span class="token punctuation" >}</span>';

		expect(output).toEqual(expectedXMLOutput);
	});

	it('highlight() should highlight JSON empty string"', function () {
		HighLightModule.setFormat('json');

		var obj = "";

		var input = JSON.stringify(obj);

		var output = HighLightModule.highlight(input);

		var expectedXMLOutput = '<span class="token string" >""</span>';

		expect(output).toEqual(expectedXMLOutput);
	});
});
