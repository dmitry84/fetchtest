/*global fetch */

/**
 * API MODULE:
 * Do the request to the server and return data as string
 * 
 * Depends on whatwg-fetch polyfill to have support in browsers which do not support Fetch Api and es6-promise for the promise support
 *  
 */
import 'es6-promise/auto';
import 'whatwg-fetch';

console.log("API_MODULE");


var ApiModule = (function(){
	
	var API_BASE_URL;

	var FORMAT;
	
// -------------------------------- PRIVATE -----------------------------------

/**
 * Construct the request url
 */
function constructRequestUrl() {
	return  API_BASE_URL +  'response.' + FORMAT;
}

/**
 * Set format 
 */
function getAcceptHeader() {
	return FORMAT === 'json' ? 'application/json' : 'text/xml';
}
	
/**
 * Parse server response and return string
 * 
 * @param {object/strng} responseObject
 * @returns {string}
 */
function parseResponse(responseObject) {
	var result = "";

	switch (FORMAT) {
		case 'xml':
			result = responseObject; // in case of xml it is just a string
			break;

		case 'json':
			result = JSON.stringify(responseObject, null, 2); // in case of json - result is json object and we need to convert it into string
			break;

		default:
			throw "Unsupported data format";
	}

	return result;
}

/**
 * Handle fetch error
 * 
 * @param {object} response
 * @returns {response object or throw exception}
 */
function handleFetchErrors(response) {
	if (!response.ok) {
		throw response.statusText;
	}
	return response;
}


/**
 * Fetch data from server
 */
function fetchData() {

	var url = getRequestUrl();
	
	var acceptHeader = getAcceptHeader();

	// construct request object
	var request = new Request(url, {
		headers: new Headers({
			'Accept': acceptHeader,
			'pragma': 'no-cache',
			'cache-control': 'no-cache'
		}),
		method: 'GET'
	});


	return fetch(request).then(handleFetchErrors).then(function (response) {
		return FORMAT === 'json' ? response.json() : response.text();
	}).then(function (data) {
		return parseResponse(data);;
	}).catch(function (ex) {
		console.log('Parsing failed: ', ex);
		throw ex;
	});
}

// -------------------------------- PUBLIC ------------------------------------			

	/**
	* Set request and expected response format
	* 
	* @param {string} format
	*/
	var setFormat = function (format) {
		FORMAT = format.toLowerCase();
	};
	
	/**
	 * Set base API Url
	 * @param {string} apiBase
	 */
	var setApiBaseUrl = function(apiBase) {
		API_BASE_URL = apiBase;
	};

	/**
	 * Return resulr as string
	 * @returns {unresolved}
	 */
	var getResults = function() {
		return fetchData();
	};


	/**
	 * Returns the actual request url
	 * @returns {string}
	 */
	var getRequestUrl = function() {
		return constructRequestUrl();
	};



    return {
        setFormat: setFormat,
		setApiBaseUrl: setApiBaseUrl,
		
		getResults: getResults,
		getRequestUrl: getRequestUrl
		
    };
})();

export  {ApiModule}