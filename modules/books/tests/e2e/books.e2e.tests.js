'use strict';

describe('Books E2E Tests:', function() {
	describe('Test Books page', function() {
		it('Should not include new Books', function() {
			browser.get('http://localhost:3000/#!/books');
			expect(element.all(by.repeater('book in books')).count()).toEqual(0);
		});
	});
});
