/**
 * Basic tests - making sure that public methods are in place
 */


import {ApiModule} from "../src/modules/api_module.js";

var API_URL = "/api/v1/";


describe('ApiModule', function () {


	it('should be defined"', function () {
		expect(ApiModule).toBeDefined();
	});

	it('setFormat() should be defined"', function () {
		expect(ApiModule.setFormat).toBeDefined();
	});

	it('setApiBaseUrl() should be defined"', function () {
		expect(ApiModule.setApiBaseUrl).toBeDefined();
	});

	it('getResults() should be defined"', function () {
		expect(ApiModule.getResults).toBeDefined();
	});

	it('getRequestUrl() should be defined"', function () {
		expect(ApiModule.getRequestUrl).toBeDefined();
	});


// ---------------------------- GET URL ---------------------------------------


	it('URL should be correct - XML"', function () {

		ApiModule.setFormat('xml');
		ApiModule.setApiBaseUrl(API_URL);

		var expectedUrl = API_URL + "response." + 'xml';

		var resultUrl = ApiModule.getRequestUrl();

		expect(resultUrl).toEqual(expectedUrl);
	});


	it('URL should be correct - json"', function () {

		ApiModule.setFormat('json');
		ApiModule.setApiBaseUrl(API_URL);

		var expectedUrl = API_URL + "response." + 'json';

		var resultUrl = ApiModule.getRequestUrl();

		expect(resultUrl).toEqual(expectedUrl);
	});
});
