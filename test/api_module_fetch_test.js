/**
 * Functional test - mock the response and making sure that it is correct
 */


import {ApiModule} from "../src/modules/api_module.js";

var API_URL = "/api/v1/";

var formats = ['json', 'xml'];


// loop by formats

function testInLoop(format) {

	var FORMAT = format;

	var URL = API_URL + "response." + FORMAT;

	var ACCEPT_HEADER = format === 'json' ? 'application/json' : 'text/xml';

	describe('It should fetch data', function () {
		var dataPromise;
		var promiseHelper;

		beforeEach(function () {
			var fetchPromise = new Promise(function (resolve, reject) {
				promiseHelper = {
					resolve: resolve,
					reject: reject
				};
			});


			spyOn(window, 'fetch').and.returnValue(fetchPromise);

			ApiModule.setFormat(FORMAT);
			ApiModule.setApiBaseUrl(API_URL);

			dataPromise = ApiModule.getResults();
		});

		it('fetches from the weather API', function () {
			var request = new Request(URL, {
				headers: new Headers({
					'Accept': ACCEPT_HEADER,
					'pragma': 'no-cache',
					'cache-control': 'no-cache'
				}),
				method: 'GET'
			});

			expect(window.fetch).toHaveBeenCalledWith(request);
		});

		it('returns a promise', function () {
			expect(dataPromise).toEqual(jasmine.any(Promise));
		});

		describe('on successful fetch', function () {

			if (FORMAT === 'json') {
					var jsonObj = {'data': 50};
				beforeEach(function () {

					var mockResponse = new window.Response(JSON.stringify(jsonObj), {
						status: 200,
						headers: {
							'Content-type': ACCEPT_HEADER
						}
					});

					promiseHelper.resolve(mockResponse);
				});



				it('resolves its promise with the current json', function (done) {
					dataPromise.then(function (json) {
						expect(json).toEqual(JSON.stringify(jsonObj, null, 2));
						done();
					});
				});
			}

			if (FORMAT === 'xml') {
				
				var xmlStr = '<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n\r\n<advertiser>\r\n    <id>1<\/id>\r\n<\/advertiser>';
				
				beforeEach(function () {
					var mockResponse = new window.Response(xmlStr, {
						status: 200,
						headers: {
							'Content-type': ACCEPT_HEADER
						}
					});

					promiseHelper.resolve(mockResponse);
				});



				it('resolves its promise with the current json', function (done) {
					dataPromise.then(function (xml) {
						expect(xml).toEqual(xmlStr);
						done();
					});
				});
			}
		});

		describe('on unsuccessful fetch', function () {
			var errorObj = {msg: 'Error in promise'};

			beforeEach(function () {
				promiseHelper.reject(errorObj);
			});

			it('resolves its promise with the current json - error', function (done) {
				dataPromise.catch(function (error) {
					expect(error).toEqual(errorObj);
					done();
				});
			});
		});


	});


}


for (var i = 0; i < formats.length; i++) {
	testInLoop(formats[i]);
}