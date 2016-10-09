
console.log("ERRORS_MODULE");

/**
 * ErrorsModule:
 * Very simplified error handling and showing. 
 * 
 * Assumes that errorsPlaceholder element exists in the DOM 
 * 
 */

var ErrorsModule = (function () {

	/* This is only supported by Chrome
	 global.window.addEventListener("unhandledrejection", function (err, promise) {
	 console.log("ERRRRR:", err);
	 showError(err.reason.message);
	 });
	 */


	 /**
	  * Show error and hide it after 5 sec
	  * @param {string} msg
	  */
	var showError = function (msg) {
		
		// to generate random id
		var id = Math.random(10000);

		var errElement = document.createElement("p");
		errElement.id = "e_" + id;
		errElement.className = "error";

		var node = document.createTextNode(msg);
		errElement.appendChild(node);

		var element = document.getElementById("errorsPlaceholder");

		element.appendChild(errElement);

		setTimeout(function () {
			document.getElementById("errorsPlaceholder").removeChild(errElement);
		}, 5000);
	};

	return {
		showError: showError
	};

})();


export  { ErrorsModule }