/*global Prism */


/**
 * HighLightModule:
 * highlight the string
 * 
 * Depends on prismjs for the code highlight
 */

import 'prismjs';

console.log("HighLight_MODULE");


var HighLightModule = (function () {
	var FORMAT;

	/**
	 * Set request and expected response format
	 * 
	 * @param {string} format
	 */
	var setFormat = function (format) {
		FORMAT = format.toLowerCase();
	};

	/**
	 * Highlight the code
	 * 
	 * @param {string} resultStr
	 */
	var highlight = function (resultStr) {
		var parserClass = FORMAT === 'json' ? 'javascript' : 'markup';
		return Prism.highlight(resultStr, Prism.languages[parserClass]);
	};


	return {
		setFormat: setFormat,
		highlight: highlight
	};

})();


export  {HighLightModule}