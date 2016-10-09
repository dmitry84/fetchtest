/*global ApiModule, HighLightModule, ErrorsModule*/

// Import modules
import {ApiModule} from './modules/api_module.js';
import {HighLightModule} from './modules/highlight_module.js';
import {ErrorsModule} from './modules/errors_module.js';


// Path to API
var API_URL = "/mock/";


/**
 * Configure modules - set format and API URI
 * @param {string} format
 */
function configureModules(format) {

	ApiModule.setFormat(format);
	ApiModule.setApiBaseUrl(API_URL);

	HighLightModule.setFormat(format);
}

/**
 * Get advertisers list
 */
function getAdvertiserList() {
	// reset view area
	document.getElementById("api_result").innerHTML = "";
	
	// get selected format
	var format = document.getElementById("request_format").value;

	configureModules(format);

	var api_url = ApiModule.getRequestUrl();
	
	document.getElementById("api_request_uri").innerHTML = "GET " + api_url;

	// do the request
	ApiModule.getResults().then(function (api_result) {

		// code highlight
		api_result = HighLightModule.highlight(api_result);

		document.getElementById("api_result").innerHTML = api_result;

	}).catch(function (error) {
		ErrorsModule.showError(error);
	});
}


// Add functions to the global scope
global.window.getAdvertiserList = getAdvertiserList;


global.window.onerror = function (msg, url, line) {
	console.log("Error: '" + msg + "' from " + url + ":" + line);
	ErrorsModule.showError(msg);
	return true;
};
