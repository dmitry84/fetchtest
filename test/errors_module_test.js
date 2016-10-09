/**
 * Basic tests - making sure that public methods are in place
 */

import {ErrorsModule} from "../src/modules/errors_module.js";

describe('ErrorsModule', function() {
    it('should be defined"', function() {
        expect(ErrorsModule).toBeDefined();
    });
	
	
	it('showError() should be defined"', function() {
        expect(ErrorsModule.showError).toBeDefined();
    });	
});
